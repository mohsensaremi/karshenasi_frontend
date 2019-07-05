import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from 'utils/redux-form/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Field} from "redux-form";

const SubmitDialog = (props) => {

    const {
        submitting,
        onSubmit,
        handleSubmit,
        open,
        onClose,
        hasPassword,
        change,
    } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="xs"
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
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={hasPassword} onChange={() => change('hasPassword', !hasPassword)}/>}
                        label="عضویت در کلاس با وارد کلمه عبور باشد"
                    />
                </FormGroup>
                {
                    hasPassword && (
                        <Field
                            component={TextField}
                            name={"password"}
                            type={"password"}
                            margin={"normal"}
                            fullWidth
                            label={"کلمه عبور"}
                            variant="outlined"
                        />
                    )
                }
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