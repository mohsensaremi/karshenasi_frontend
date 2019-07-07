import {connect} from "react-redux";

export default connect(
    state => ({
        me: state.globalState.get('me'),
    })
)