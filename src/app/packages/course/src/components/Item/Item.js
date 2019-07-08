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
import FaceIcon from '@material-ui/icons/Face';

const Item = (props) => {

    const {
        classes,
        title,
        id,
        openSubmitDialog,
        data,
        me,
        userId,
        user,
    } = props;

    return (
        <Paper className={classes.root}>
            <Typography className={classes.title}>
                {title}
                {
                    me.get('id') === userId && (
                        <React.Fragment>
                            <IconButton
                                size={"small"}
                                onClick={() => openSubmitDialog(data)}
                            >
                                <EditIcon/>
                            </IconButton>
                            < IconButton
                                size={"small"}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </React.Fragment>
                    )
                }
            </Typography>
            <Grid
                container
                alignItems={"center"}
                justify={"space-between"}
            >
                <Grid item>
                    {
                        user && (
                            <Grid container alignItems={"center"}>
                                <Avatar className={classes.userAvatar}>
                                    <FaceIcon/>
                                </Avatar>
                                <Typography className={classes.user}>
                                    {`${user.firstName} ${user.lastName}`}
                                </Typography>
                            </Grid>
                        )
                    }
                </Grid>
                <Grid item>
                    <Button
                        color={"primary"}
                        variant={"outlined"}
                        component={Link}
                        to={`/course/${id}`}
                    >
                        ورود به کلاس
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Item;