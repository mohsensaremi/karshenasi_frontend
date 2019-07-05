import {compose} from 'recompose';
import {connect} from 'react-redux';
import {actions} from '../actions';

export default (WrappedComponent) => {
    return compose(
        connect(
            null,
            dispatch => ({
                openToast: (...args) => dispatch(actions.open(...args)),
            }),
        ),
    )(WrappedComponent);
}