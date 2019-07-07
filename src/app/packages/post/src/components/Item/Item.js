import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';

const Item = (props) => {

    const {
        classes,
        title,
        id,
        userId,
        openSubmitDialog,
        data,
        me,
    } = props;

    return (
        <Paper className={classes.root}>
            <Grid container spacing={1} alignItems={"center"} justify={"space-between"}>
                <Grid item>
                    <Typography>
                        {title}
                    </Typography>
                </Grid>
                {
                    me.get('id') === userId && (
                        <Grid item>
                            <Grid container spacing={1} alignItems={"center"}>
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
                                <Grid item>
                                    <IconButton
                                        size={"small"}
                                        onClick={() => openSubmitDialog(data)}
                                    >
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton
                                        size={"small"}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
        </Paper>
    );
}

export default Item;