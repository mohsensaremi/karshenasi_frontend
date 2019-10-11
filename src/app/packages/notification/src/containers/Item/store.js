import {connect} from "react-redux";
import {open} from "packages/dialog";

export default connect(
    null,
    dispatch => ({
        openPostDialog: (data) => {
            dispatch(open("postDetail", data));
        },
    })
)
