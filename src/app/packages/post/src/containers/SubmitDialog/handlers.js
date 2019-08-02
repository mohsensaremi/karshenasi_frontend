import {withHandlers} from "recompose";

export default withHandlers({
    onEnter: ({setTab, type, setMembersLoading, postHttp, postId, change}) => () => {
        setTab("general");
        if (postId && ["attendance", "grade"].includes(type)) {
            let promise = null;
            setMembersLoading(true);
            switch (type) {
                case "attendance":
                    promise = postHttp(`/post/attendances?postId=${postId}`).then(res => {
                        change("attendance", res.data.data);
                    });
                    break;
                case "grade":
                    promise = postHttp(`/post/grades?postId=${postId}`).then(res => {
                        change("grade", res.data.data);
                    });
                    break;
                default:
                    break;
            }
            if (promise) {
                promise.finally(() => {
                    setMembersLoading(false);
                });
            }
        }
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
