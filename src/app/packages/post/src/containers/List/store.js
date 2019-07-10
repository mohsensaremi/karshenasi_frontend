import {connect} from "react-redux";
import {initialize} from "redux-form";
import {open} from "packages/dialog";

export default connect(
    (state, {me}) => ({
        courseId: state.globalState.get('courseId'),
        isOwner: me.get('id') === state.globalState.get('courseUserId'),
    }),
    dispatch => ({
        openSubmitDialog: (initialValues) => {
            dispatch(initialize("post", initialValues));
            dispatch(open("post"));
        },
    })
)