import {withHandlers} from "recompose";

export default withHandlers({
    onClickPost: ({openPostDialog, notifiable, setCount, postHttp, id}) => () => {
        openPostDialog(notifiable);
        postHttp('notification/read', {
            ids: [id],
        }).then(res => {
            if (res.data) {
                setCount(res.data.count);
            }
        });
    },
})
