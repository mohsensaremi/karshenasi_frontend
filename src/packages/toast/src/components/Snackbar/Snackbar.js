import React from 'react';
import PropTypes from 'prop-types';
import MuiSnackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '../SnackbarContent';


const Snackbar = ({
    open,
    onClose,
    autoHideDuration,
    messages,
    variant,
}) => {


    return (
        <MuiSnackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
        >
            <SnackbarContent
                onClose={onClose}
                variant={variant}
                message={messages.join('\n')}
            />
        </MuiSnackbar>
    );
}

Snackbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Snackbar;