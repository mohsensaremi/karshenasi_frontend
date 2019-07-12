import {compose, withHandlers} from "recompose";

export default compose(
    withHandlers({
        onSubmit: ({postHttp, onClose, onSuccess, password, courseId, setLoading}) => () => {
            setLoading(true);
            return postHttp('/course/join', {courseId, password}).then(res => {
                if (typeof onSuccess === 'function') {
                    onSuccess(res.data);
                }
            }).finally(() => {
                onClose();
                setLoading(false);
            });
        },
    }),
    withHandlers({
        onEnter: ({onSubmit, hasPassword}) => () => {
            if (!hasPassword) {
                onSubmit();
            }
        },
    })
);
