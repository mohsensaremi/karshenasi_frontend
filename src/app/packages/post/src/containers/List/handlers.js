import {withHandlers} from "recompose";

export default withHandlers({
    onSubmitSuccess: ({pushFirstData, updateItemInData}) => (res) => {
        console.log("res", res.data);
        if (res.edit) {
            updateItemInData(res.data)
        } else {
            pushFirstData(res.data);
        }
    },
})