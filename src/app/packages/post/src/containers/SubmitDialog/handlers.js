import {withHandlers} from "recompose";

export default withHandlers({
    onEnter: ({setTab}) => () => {
        setTab("general");
    },
    onSubmit: ({postHttp, onClose, onSuccess, type, courseId}) => (data) => {
        return postHttp('/post/submit', {...data, type, courseId}).then(res => {
            onClose();
            if (typeof onSuccess === 'function') {
                onSuccess(res.data);
            }
        });
    },
})
