import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SchoolIcon from '@material-ui/icons/School';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const Sidebar = (props) => {

    const {
        classes,
        me,
        onClickLogout,
    } = props;

    const buttons = [
        {
            label: "کلاس های من",
            icon: SchoolIcon,
        },
        {
            label: "در یک نگاه",
            icon: CastForEducationIcon,
        },
        {
            label: "ویرایش پروفایل",
            icon: PersonIcon,
        },
        {
            label: "خروج",
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
                    >
                        {`${me.get('firstName')[0]} ${me.get('lastName')[0]}`}
                    </Avatar>
                    <Typography>
                        {`${me.get('firstName')} ${me.get('lastName')}`}
                        <Typography className={classes.type} display={"inline"}>
                            {`(${me.get('typeFa')})`}
                        </Typography>
                    </Typography>
                </Typography>
            </Paper>
            <Paper className={classes.paper}>
                {
                    buttons.map((button, index) => {
                        const Icon = button.icon;
                        return (
                            <Button
                                key={index}
                                fullWidth
                                className={classes.button}
                                onClick={button.onClick}
                            >
                                <Icon className={classes.buttonIcon}/>
                                {button.label}
                            </Button>
                        );
                    })
                }
            </Paper>
        </div>
    );
}

export default Sidebar;