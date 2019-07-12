import {withHandlers} from "recompose";

export default withHandlers({
    onSubmit: ({postHttp, onClose, onSuccess}) => (data) => {
        return postHttp('/course/submit', data).then(res => {
            onClose();
            if (typeof onSuccess === 'function') {
                onSuccess(res.data);
            }
        });
    },
})