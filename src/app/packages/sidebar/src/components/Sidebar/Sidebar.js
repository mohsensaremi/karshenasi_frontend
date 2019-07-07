import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const Sidebar = (props) => {

    const {
        classes,
        me,
    } = props;

    const buttons = [
        {
            children: "کلاس های من",
        },
        {
            children: "در یک نگاه",
        },
        {
            children: "ویرایش پروفایل",
        },
        {
            children: "خروج",
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
                        return (
                            <Button
                                key={index}
                                fullWidth
                                className={classes.button}
                                {...button}
                            />
                        );
                    })
                }
            </Paper>
        </div>
    );
}

export default Sidebar;