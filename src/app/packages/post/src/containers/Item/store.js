import {connect} from "react-redux";
import {open} from "packages/dialog";

export default connect(
    null,
    dispatch => ({
        openDetailDialog: (data) => {
            dispatch(open("postDetail", data));
        },
    })
)