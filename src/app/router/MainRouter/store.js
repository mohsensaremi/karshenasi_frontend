import {connect} from "react-redux";

export default connect(
    state => ({
        meLoading: state.globalState.get('meLoading', false),
        me: state.globalState.get('me'),
        menuOpen: state.globalState.get('menuOpen', true),
    }),
);
