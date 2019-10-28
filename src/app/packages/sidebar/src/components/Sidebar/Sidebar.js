import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SchoolIcon from '@material-ui/icons/School';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Link from 'utils/components/Link';
import Avatar from 'app/packages/profile/src/containers/Avatar';
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';

const Sidebar = (props) => {

    const {
        classes,
        me,
        onClickLogout,
        intl: {formatMessage},
    } = props;

    const buttons = [
        {
            value: "myCourses",
            icon: SchoolIcon,
            component: Link,
            to: "/courses",
        },
        {
            value: "calendar",
            icon: CastForEducationIcon,
            component: Link,
            to: "/calendar",
        },
        {
            value: "editProfile",
            icon: PersonIcon,
            component: Link,
            to: "/profile",
        },
        {
            value: "logout",
            icon: PowerSettingsNewIcon,
            onClick: onClickLogout
        },
    ];

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography component={Grid} container alignItems={"center"} justify={"center"} direction={"column"}>
                    <Avatar
                        className={classes.avatar}
                    />
                    <Typography>
                        {`${me.get('firstName')} ${me.get('lastName')}`}
                        <Typography className={classes.type} display={"inline"} component={"span"}>
                            {`(${me.get('typeFa')})`}
                        </Typography>
                    </Typography>
                </Typography>
            </Paper>
            <Paper className={classes.paper}>
                {
                    buttons.map((button, index) => {
                        const {
                            label,
                            icon: Icon,
                            ...buttonProps
                        } = button;

                        return (
                            <Button
                                key={button.value}
                                fullWidth
                                className={classes.button}
                                {...buttonProps}
                            >
                                <Icon className={classes.buttonIcon}/>
                                {formatMessage(messages[button.value])}
                            </Button>
                        );
                    })
                }
            </Paper>
        </div>
    );
};

export default injectIntl(Sidebar);
