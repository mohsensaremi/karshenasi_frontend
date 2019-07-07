import {connect} from "react-redux";

export default connect(
    state => ({
        type: state.globalState.get('courseActiveTab'),
        courseId: state.globalState.get('courseId'),
    }),
)