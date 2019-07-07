import {connect} from "react-redux";
import {initialize} from "redux-form";
import {open} from "packages/dialog";

export default connect(
    state => ({
        activeTab: state.globalState.get('courseActiveTab') || false,
    }),
    dispatch => ({
        openSubmitDialog: (initialValues) => {
            dispatch(initialize("course", initialValues));
            dispatch(open("course"));
        },
    })
)