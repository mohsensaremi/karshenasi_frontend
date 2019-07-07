import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from 'utils/redux-form/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {Field} from "redux-form";

const SubmitDialog = (props) => {

    const {
        submitting,
        onSubmit,
        handleSubmit,
        open,
        onClose,
    } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >
            <DialogContent>
                <Field
                    component={TextField}
                    name={"title"}
                    margin={"normal"}
                    fullWidth
                    label={"عنوان"}
                    variant="outlined"
                />
                <Field
                    component={TextField}
                    name={"content"}
                    margin={"normal"}
                    fullWidth
                    label={"توضیحات"}
                    variant="outlined"
                    multiline
                    rows={10}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleSubmit(onSubmit)}
                    color="primary"
                    variant={"outlined"}
                    disabled={submitting}
                >
                    ثبت
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default SubmitDialog;