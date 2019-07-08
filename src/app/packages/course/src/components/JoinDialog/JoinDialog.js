import React from 'react';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Loading from 'packages/loading/src/components/Loading1';
import Button from "../SubmitDialog/SubmitDialog";

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
                            margin={"normal"}
                            fullWidth
                            label={"کلمه عبور کلاس"}
                            variant="outlined"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    )
                }
                {
                    loading && (
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
                            ثبت
                        </Button>
                    </DialogActions>
                )
            }
        </Dialog>
    );
}

export default JoinDialog;