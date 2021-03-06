import {withHandlers} from "recompose";
import {localQueryString} from 'utils/utils/locale';

export default withHandlers({
    onClickLogout: ({postHttp}) => () => {
        postHttp('/logout').then(() => {
            window.localStorage.removeItem(process.env.REACT_APP_ACCESS_TOKEN_NAME);
            window.location.href = `${process.env.REACT_APP_URL}/login${localQueryString}`;
        });
    },
})
