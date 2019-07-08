import {connect} from "react-redux";

export default connect(
    state => ({
        isInstructor: state.globalState.getIn(['me', 'type']) === "instructor",
    })
)