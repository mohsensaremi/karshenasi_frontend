import {withHandlers} from "recompose";

export default withHandlers({
    onSuccess: ({setLocalData}) => () => {
        setLocalData(x => ({
            ...x,
            userIsMember: true,
        }));
    },
    onClickDelete: ({setLoading, postHttp, id, onDeleteSuccess}) => () => {
        setLoading(true);
        return postHttp('/course/remove', {courseId: id}).then(res => {
            if (typeof onDeleteSuccess === 'function') {
                onDeleteSuccess(res.data);
            }
        }).finally(() => {
            setLoading(false);
        });
    },
});
