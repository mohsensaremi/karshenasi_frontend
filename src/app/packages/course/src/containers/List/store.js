import {connect} from "react-redux";
import {initialize} from "redux-form";
import {open} from "packages/dialog";

export default connect(
    null,
    dispatch => ({
        openSubmitDialog: (initialValues) => {
            dispatch(initialize("course", initialValues));
            dispatch(open("course"));
        },
        openJoinDialog: () => {
            dispatch(open("joinCourse"));
        },
    })
)