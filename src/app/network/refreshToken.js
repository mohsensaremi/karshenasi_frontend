import axios from 'axios';
import urlJoin from 'url-join';
import {localQueryString} from 'utils/utils/locale';

let currentHttp = null;

export default function () {
    if (!currentHttp) {
        currentHttp = new Promise((resolve, reject) => {
            axios.post(urlJoin(process.env.REACT_APP_API_URL, '/refresh'), {}, {
                headers: {
                    authorization: `Bearer ${window.localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_NAME)}`,
                }
            })
                .then(res => {
                    if (res.data.status === 200) {
                        window.localStorage.setItem(process.env.REACT_APP_ACCESS_TOKEN_NAME, res.data.token);
                        resolve(res.data.token);
                    } else {
                        window.location.href = urlJoin(process.env.REACT_APP_URL, `/login${localQueryString}`);
                        window.localStorage.removeItem(process.env.REACT_APP_ACCESS_TOKEN_NAME);
                        reject(res);
                    }
                })
                .catch(err => {
                    reject(err);
                })
                .finally(() => {
                    currentHttp = null;
                });
        });
    }

    return currentHttp;
}
