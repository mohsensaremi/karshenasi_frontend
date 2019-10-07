import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'utils/redux-form/TextField';
import {Field} from "redux-form";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {injectIntl} from "react-intl";
import capitalize from 'lodash/capitalize';
import messages from 'i18n/messages/messages';

function Login(props) {

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
                <div className={classes.buttonWrapper}>
                    <Grid container spacing={1} alignItems={"center"} justify={"space-between"}>
                        <Grid item>
                            <Button
                                disabled={submitting}
                                variant={"contained"}
                                color={"primary"}
                                onClick={handleSubmit(onSubmit)}
                            >
                                {formatMessage(messages.login)}
                            </Button>
                        </Grid>
                        <Grid item>
                            <Typography variant={"caption"}>
                                {formatMessage(messages.registerMessage)}
                                <Link
                                    to={"/register"}
                                    className={classes.link}
                                >
                                    {formatMessage(messages.register)}
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </div>
    );
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectIntl(Login);
