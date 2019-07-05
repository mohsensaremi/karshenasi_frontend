import {connect} from 'react-refetch'
import urlJoin from 'url-join';
import refreshToken from './refreshToken';

export default connect.defaults({
    fetch: function (input, init) {
        const req = new Request(input, init);

        return new Promise((resolve, reject) => {
            fetch(req, {
                headers: {
                    authorization: `Bearer ${window.localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_NAME)}`,
                },
            }).then(response => {
                response.clone().json().then(body => {
                    if (body.status === 401) {
                        return refreshToken().then((token) => {
                            resolve(fetch(req, {
                                headers: {
                                    authorization: `Bearer ${token}`,
                                },
                            }));
                        }).catch((err) => {
                            reject(err);
                        });
                    } else {
                        resolve(response);
                    }
                }).catch(reject);
            }).catch(reject)
        });
    },
    buildRequest: function (mapping) {
        const options = {
            method: mapping.method,
            // cache: 'force-cache',
            // referrer: 'https://example.com',
            headers: mapping.headers,
            credentials: mapping.credentials,
            redirect: mapping.redirect,
            mode: mapping.mode,
            body: mapping.body
        };

        return new Request(urlJoin(process.env.REACT_APP_API_URL, mapping.url), options);
    },
});
