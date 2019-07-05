import {connect} from 'react-redux';
import {actions} from '../../actions';

export default connect(
    state => (state.toast),
    dispatch => ({
        onClose: (...args) => dispatch(actions.close(...args)),
    }),
);