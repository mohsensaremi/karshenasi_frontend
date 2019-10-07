import React from 'react';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Loading from 'packages/loading/src/components/Loading1';
import Button from "@material-ui/core/Button";
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';
import capitalize from 'lodash/capitalize';

const JoinDialog = (props) => {

    const {
        open,
        onClose,
        password,
        setPassword,
        loading,
        hasPassword,
        onSubmit,
        onEnter,
        intl: {formatMessage},
    } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            onEnter={onEnter}
            fullWidth
            maxWidth="xs"
        >
            <DialogContent>
                {
                    hasPassword && (
                        <TextField
                            autoFocus
                            margin={"normal"}
                            fullWidth
                            label={capitalize(formatMessage(messages.coursePassword))}
                            variant="outlined"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    )
                }
                {
                    loading && !hasPassword && (
                        <Loading/>
                    )
                }
            </DialogContent>
            {
                hasPassword && (
                    <DialogActions>
                        <Button
                            onClick={onSubmit}
                            color="primary"
                            variant={"outlined"}
                            disabled={loading}
                        >
                            {formatMessage(messages.submit)}
                        </Button>
                    </DialogActions>
                )
            }
        </Dialog>
    );
};

export default injectIntl(JoinDialog);
