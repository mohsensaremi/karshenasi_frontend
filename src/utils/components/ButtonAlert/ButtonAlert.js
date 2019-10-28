import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';

function ButtonAlert(props) {

    const {
        component: Component,
        children,
        title,
        content,
        acceptButtonText,
        rejectButtonText,
        onClick,
        intl: {formatMessage},
        ...buttonProps
    } = props;

    const [open, setOpen] = React.useState(false);

    function handleClickOpen(event) {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <React.Fragment>
            <Component
                {...buttonProps}
                onClick={handleClickOpen}
            >
                {children}
            </Component>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    {formatMessage(messages.alertDialogTitle)}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {formatMessage(messages.alertDialogContent)}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant={"outlined"}>
                        {formatMessage(messages.alertDialogRejectButtonText)}
                    </Button>
                    <Button
                        onClick={() => {
                            handleClose();
                            if (typeof onClick === "function") {
                                onClick();
                            }
                        }}
                        color="primary"
                        variant={"outlined"}
                    >
                        {formatMessage(messages.alertDialogAcceptButtonText)}
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

ButtonAlert.defaultProps = {
    component: Button,
};

export default injectIntl(ButtonAlert);
