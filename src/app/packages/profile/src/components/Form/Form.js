import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {Field} from "redux-form";
import TextField from "utils/redux-form/TextField";
import capitalize from "lodash/capitalize";
import messages from "i18n/messages/messages";
import {injectIntl} from "react-intl";

const Form = (props) => {

    const {
        classes,
        intl: {formatMessage},
        onSubmit,
        submitting,
        handleSubmit,
    } = props;

    return (
        <div className={classes.root}>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Field
                        component={TextField}
                        name={"firstName"}
                        fullWidth
                        label={capitalize(formatMessage(messages.firstName))}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Field
                        component={TextField}
                        name={"lastName"}
                        fullWidth
                        label={capitalize(formatMessage(messages.lastName))}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Field
                        component={TextField}
                        name={"email"}
                        fullWidth
                        label={capitalize(formatMessage(messages.email))}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Divider/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Field
                        component={TextField}
                        name={"oldPassword"}
                        fullWidth
                        label={capitalize(formatMessage(messages.oldPassword))}
                        variant="outlined"
                        type={"password"}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Field
                        component={TextField}
                        name={"password"}
                        fullWidth
                        label={capitalize(formatMessage(messages.password))}
                        variant="outlined"
                        type={"password"}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Field
                        component={TextField}
                        name={"passwordConfirmation"}
                        fullWidth
                        label={capitalize(formatMessage(messages.passwordConfirmation))}
                        variant="outlined"
                        type={"password"}
                    />
                </Grid>
                <Grid item xs={12} container justify={"flex-end"}>
                    <Button
                        color={"primary"}
                        variant={"contained"}
                        onClick={handleSubmit(onSubmit)}
                        disabled={submitting}
                    >
                        {formatMessage(messages.submit)}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default injectIntl(Form);
