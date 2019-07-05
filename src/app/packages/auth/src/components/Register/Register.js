import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'utils/redux-form/TextField';
import SelectField from 'utils/redux-form/SelectField';
import {Field} from "redux-form";
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

function Register(props) {

    const {
        classes,
        handleSubmit,
        submitting,
        onSubmit,
    } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Field
                    component={TextField}
                    name={"firstName"}
                    margin={"normal"}
                    fullWidth
                    label={"نام"}
                    variant="outlined"
                />
                <Field
                    component={TextField}
                    name={"lastName"}
                    margin={"normal"}
                    fullWidth
                    label={"نام خانوادگی"}
                    variant="outlined"
                />
                <Field
                    component={SelectField}
                    name={"type"}
                    margin={"normal"}
                    fullWidth
                    label={"نوع کاربری"}
                    variant="outlined"
                >
                    <MenuItem value={"student"}>دانشجو</MenuItem>
                    <MenuItem value={"instructor"}>استاد</MenuItem>
                </Field>
                <Field
                    component={TextField}
                    name={"email"}
                    margin={"normal"}
                    fullWidth
                    label={"ایمیل"}
                    variant="outlined"
                />
                <Field
                    component={TextField}
                    name={"password"}
                    type={"password"}
                    margin={"normal"}
                    fullWidth
                    label={"کلمه عبور"}
                    variant="outlined"
                />
                <Field
                    component={TextField}
                    name={"passwordConfirmation"}
                    type={"password"}
                    margin={"normal"}
                    fullWidth
                    label={"تکرار کلمه عبور"}
                    variant="outlined"
                />
                <div className={classes.buttonWrapper}>
                    <Grid container spacing={1} alignItems={"center"} justify={"space-between"}>
                        <Grid item>
                            <Button
                                disabled={submitting}
                                variant={"contained"}
                                color={"primary"}
                                onClick={handleSubmit(onSubmit)}
                            >
                                ثبت نام
                            </Button>
                        </Grid>
                        <Grid item>
                            <Typography variant={"caption"}>
                                حساب کاربری دارید؟
                                <Link
                                    to={"/login"}
                                    className={classes.link}
                                >
                                    وارد شوید
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </div>
    );
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Register;
