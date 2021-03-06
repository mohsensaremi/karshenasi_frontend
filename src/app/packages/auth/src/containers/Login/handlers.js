import {withHandlers} from "recompose";
import {localQueryString} from 'utils/utils/locale';

export default withHandlers({
    onSubmit: ({postHttp}) => (data) => {
        postHttp('/login', data).then(res => {
            window.localStorage.setItem(process.env.REACT_APP_ACCESS_TOKEN_NAME, res.data.token);
            window.location.href = `${process.env.REACT_APP_URL}${localQueryString}`;
        });
    },
})
