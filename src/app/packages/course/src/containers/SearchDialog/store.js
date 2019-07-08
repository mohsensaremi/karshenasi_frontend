import {connect} from "react-redux";
import {open} from "packages/dialog";

export default connect(
    null,
    dispatch => ({
        openJoinDialog: ({hasPassword, id}) => {
            dispatch(open("joinCourse", {hasPassword, courseId: id}));
        },
    })
)