import axios from 'axios';
import urlJoin from 'url-join';
import refreshToken from "./refreshToken";

export default function (url, data, options) {
    options = options || {};

    if (!options.headers) {
        options.headers = {};
    }
    options.headers.authorization = `Bearer ${window.localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_NAME)}`;

    return axios.post(urlJoin(process.env.REACT_APP_API_URL, url), data, options)
        .then(response => {
            return new Promise((resolve, reject) => {
                if (response.data.status === 200) {
                    resolve(response);
                } else if (response.data.status === 401) {
                    return refreshToken().then((token) => {
                        options.headers.authorization = `Bearer ${token}`;
                        resolve(axios.post(urlJoin(process.env.REACT_APP_API_URL, url), data, options));
                    }).catch((err) => {
                        reject(err);
                    });
                } else {
                    reject(response);
                }
            })
        })
};
