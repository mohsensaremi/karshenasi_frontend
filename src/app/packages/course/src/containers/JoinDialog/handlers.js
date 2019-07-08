import {compose, withHandlers} from "recompose";

export default compose(
    withHandlers({
        onSubmit: ({postHttp, onClose, onSuccess, password, courseId, setLoading}) => () => {
            setLoading(true);
            return postHttp('/course/join', {courseId, password}).then(res => {
                onClose();
                if (typeof onSuccess === 'function') {
                    onSuccess(res.data.data);
                }
            }).finally(() => {
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
