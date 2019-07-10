import {withHandlers} from "recompose";

export default withHandlers({
    onClickDetail: ({data,openDetailDialog}) => (res) => {
        openDetailDialog(data);
    },
})