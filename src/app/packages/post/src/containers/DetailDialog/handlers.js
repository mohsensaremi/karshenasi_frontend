import {withHandlers} from "recompose";

export default withHandlers({
    onEnter: ({setLoading, type, postHttp, id, setGrade, setAttendance}) => () => {
        setGrade(null);
        setAttendance(null);
        if (id && ["attendance", "grade"].includes(type)) {
            setLoading(true);
            let promise = null;
            switch (type) {
                case "attendance":
                    promise = postHttp(`/post/attendances`, {postId: id}).then(res => {
                        setAttendance(res.data.data);
                    });
                    break;
                case "grade":
                    promise = postHttp(`/post/grades`, {postId: id}).then(res => {
                        setGrade(res.data.data);
                    });
                    break;
                default:
                    break;
            }
            if (promise) {
                promise.finally(() => {
                    setLoading(false);
                });
            }
        }
    },
})
