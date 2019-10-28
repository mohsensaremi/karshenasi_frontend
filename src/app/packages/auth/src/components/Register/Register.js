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
import Link from 'utils/components/Link';
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';
import capitalize from 'lodash/capitalize';


function Register(props) {

    const {
        classes,
        handleSubmit,
        submitting,
        onSubmit,
        intl: {formatMessage},
    } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Field
                    component={TextField}
                    name={"firstName"}
                    margin={"normal"}
                    fullWidth
                    label={capitalize(formatMessage(messages.firstName))}
                    variant="outlined"
                />
                <Field
                    component={TextField}
                    name={"lastName"}
                    margin={"normal"}
                    fullWidth
                    label={capitalize(formatMessage(messages.lastName))}
                    variant="outlined"
                />
                <Field
                    component={SelectField}
                    name={"type"}
                    margin={"normal"}
                    fullWidth
                    label={capitalize(formatMessage(messages.userType))}
                    variant="outlined"
                >
                    <MenuItem value={"student"}>{capitalize(formatMessage(messages.student))}</MenuItem>
                    <MenuItem value={"instructor"}>{capitalize(formatMessage(messages.instructor))}</MenuItem>
                </Field>
                <Field
                    component={TextField}
                    name={"email"}
                    margin={"normal"}
                    fullWidth
                    label={capitalize(formatMessage(messages.email))}
                    variant="outlined"
                />
                <Field
                    component={TextField}
                    name={"password"}
                    type={"password"}
                    margin={"normal"}
                    fullWidth
                    label={capitalize(formatMessage(messages.password))}
                    variant="outlined"
                />
                <Field
                    component={TextField}
                    name={"passwordConfirmation"}
                    type={"password"}
                    margin={"normal"}
                    fullWidth
                    label={capitalize(formatMessage(messages.passwordConfirmation))}
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
                                {formatMessage(messages.register)}
                            </Button>
                        </Grid>
                        <Grid item>
                            <Typography variant={"caption"}>
                                {formatMessage(messages.loginMessage)}
                                <Link
                                    to={"/login"}
                                    className={classes.link}
                                >
                                    {formatMessage(messages.login)}
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

export default injectIntl(Register);
