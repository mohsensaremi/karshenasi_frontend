import React from 'react';
import Button from '@material-ui/core/Button';
import MuiDialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const FormDialog = (props) => {

    const {
        open,
        onClose,
        submitting,
        handleSubmit,
        onSubmit,
        children,
        onEnter,
        dialogProps,
    } = props;

    return (
        <MuiDialog
            open={open}
            onClose={onClose}
            onEnter={onEnter}
            fullWidth
            maxWidth={"sm"}
            {...dialogProps}
        >
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button
                    variant={"outlined"}
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                    disabled={submitting}
                >
                    تایید
                </Button>
            </DialogActions>
        </MuiDialog>
    );
};

export default FormDialog;
