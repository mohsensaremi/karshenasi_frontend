import {connect} from 'react-redux';
import {actions} from '../actions';

const withGlobalState = (WrappedComponent) => {
    return connect(
        null,
        dispatch => ({
            setItem: (...args) => dispatch(actions.set(...args)),
            unsetItem: (...args) => dispatch(actions.unset(...args)),
        }),
    )(WrappedComponent);
};

export default withGlobalState;