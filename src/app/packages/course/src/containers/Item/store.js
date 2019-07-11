import {connect} from "react-redux";
import {open} from "packages/dialog";

export default connect(
    null,
    (dispatch, {hasPassword, id, onSuccess}) => ({
        openJoinDialog: () => {
            dispatch(open("joinCourse", {hasPassword, courseId: id, onSuccess}));
        },
    })
)