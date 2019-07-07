import {withHandlers} from "recompose";

export default withHandlers({
    onSubmitSuccess: ({setUpdatedData}) => (res) => {
        setUpdatedData(res.data);
    },
})