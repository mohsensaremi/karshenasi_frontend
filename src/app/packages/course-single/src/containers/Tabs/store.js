import {connect} from "react-redux";

export default connect(
    state => ({
        activeTab: state.globalState.get('courseActiveTab') || false,
    }),
)