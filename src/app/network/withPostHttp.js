import {compose, withProps} from 'recompose';
import postHttp from './post';
import {withToast} from "packages/toast";

export default compose(
    withToast,
    withProps(({openToast}) => ({
        postHttp: (...args) => {
            return new Promise((resolve, reject) => {
                postHttp(...args).then(res => {

                    resolve(res);
                }).catch((res) => {
                    if (res && res.message) {
                        openToast({
                            variant: 'error',
                            messages: [res.message],
                        });
                    } else if (res && res.data && res.data.status !== 200) {
                        if (res.data && res.data.errors) {
                            openToast({
                                variant: 'error',
                                messages: res.data.errors,
                            });
                        }
                    }

                    reject(res);
                });
            })
        },
    }))
);
