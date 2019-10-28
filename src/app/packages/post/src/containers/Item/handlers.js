import {withHandlers} from "recompose";

export default withHandlers({
    onClickDetail: ({data,openDetailDialog}) => (res) => {
        openDetailDialog(data);
    },
    onClickDelete: ({setLoading, postHttp, id, onDeleteSuccess}) => () => {
        setLoading(true);
        return postHttp('/post/remove', {postId: id}).then(res => {
            if (typeof onDeleteSuccess === 'function') {
                onDeleteSuccess(res.data);
            }
        }).finally(() => {
            setLoading(false);
        });
    },
})
