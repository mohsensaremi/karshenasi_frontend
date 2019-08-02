import {connect} from "react-redux";

export default connect(
    state => ({
        courseId: state.globalState.get('courseId'),
    }),
)
