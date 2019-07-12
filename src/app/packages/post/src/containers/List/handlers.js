import {withHandlers} from "recompose";

export default withHandlers({
    onSubmitSuccess: ({pushFirstData, updateItemInData}) => (res) => {
        if (res.edit) {
            updateItemInData(res.data)
        } else {
            pushFirstData(res.data);
        }
    },
})