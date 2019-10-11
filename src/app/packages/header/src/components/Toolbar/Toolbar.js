import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from 'img/logo-white-2.png';
import {injectIntl, defineMessages} from "react-intl";
import NotificationButton from 'app/packages/notification/src/containers/Button';

const messages = defineMessages({
    title: {
        id: 'header.toolbar.title',
        defaultMessage: 'Learning management system'
    },
});

const Toolbar = (props) => {

    const {
        classes,
        intl: {formatMessage},
    } = props;

    return (
        <AppBar position="static" className={classes.root}>
            <MuiToolbar>
                <Typography
                    variant="h6"
                    className={classes.title}
                    component={Grid}
                    container
                    alignItems={"center"}
                >
                    <img
                        src={logo}
                        className={classes.logo}
                        alt={"logo"}
                    />
                    {formatMessage(messages.title)}
                </Typography>
                <NotificationButton/>
            </MuiToolbar>
        </AppBar>
    );
};

export default injectIntl(Toolbar);
