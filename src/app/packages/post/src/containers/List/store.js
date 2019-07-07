import {connect} from "react-redux";
import {initialize} from "redux-form";
import {open} from "packages/dialog";

export default connect(
    state => ({
        courseId: state.globalState.get('courseId'),
    }),
    dispatch => ({
        openSubmitDialog: (initialValues) => {
            dispatch(initialize("post", initialValues));
            dispatch(open("post"));
        },
    })
)