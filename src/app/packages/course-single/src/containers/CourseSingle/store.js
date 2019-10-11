import {connect} from "react-redux";
import {initialize} from "redux-form";
import {open} from "packages/dialog";

export default connect(
    (state, {me}) => ({
        activeTab: state.globalState.get('courseActiveTab') || false,
        isOwner: me.get('id') === state.globalState.get('courseUserId'),
    }),
    dispatch => ({
        openSubmitDialog: (initialValues) => {
            dispatch(initialize("course", initialValues));
            dispatch(open("course"));
        },
    })
)
