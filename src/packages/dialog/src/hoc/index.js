import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {compose} from 'recompose';
import {getDialog} from '../reducers/getters';
import * as actions from '../actions';

export const withDialog = ({
                               name,
                           }) => {
    const getter = getDialog(name);
    const localActions = {
        setDialog: (...arg) => actions.set(name, ...arg),
        onClose: () => actions.close(name),
    };

    return (WrapperComponent) => {
        return compose(
            connect(
                state => getter(state),
                dispatch => bindActionCreators(localActions, dispatch),
            ),
        )(WrapperComponent);
    };
};
