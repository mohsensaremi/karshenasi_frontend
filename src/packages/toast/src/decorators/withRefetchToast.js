import React from 'react';
import {compose, withState, withHandlers} from 'recompose';
import {connect} from 'react-redux';
import withToast from './withToast';
import pick from 'lodash/pick';
import Snackbar from '../components/Snackbar';

const Toast = compose(
    withState('open', 'setOpen', true),
    withHandlers({
        onClose: ({setOpen}) => () => {
            setOpen(false);
        },
    })
)(Snackbar);

export default (keys) => (WrappedComponent) => {
    return (props) => {

        const responses = Object.values(pick(props, keys));

        return (
            <React.Fragment>
                {
                    Array.isArray(responses) && responses.map((res, index) => (
                        res && res.rejected && res.reason && Array.isArray(res.reason.messages) && (
                            <Toast
                                key={index}
                                messages={res.reason.messages}
                                variant="error"
                            />
                        )
                    ))
                }
                <WrappedComponent {...props}/>
            </React.Fragment>
        );
    };
}
