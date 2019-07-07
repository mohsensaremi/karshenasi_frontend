import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SchoolIcon from '@material-ui/icons/School';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Collapse from '@material-ui/core/Collapse';
import {Link} from 'react-router-dom';

const CourseSingle = (props) => {

    const {
        classes,
        title,
        user,
        me,
    } = props;

    const [detailExpand, setDetailExpand] = useState(false);

    return (
        <Paper className={classes.root}>
            <Grid container spacing={1} alignItems={"center"} justify={"space-between"}>
                <Grid item>
                    <Typography variant="h1" component={Grid} container alignItems={"center"}>
                        <SchoolIcon fontSize={"inherit"} className={classes.titleIcon}/>
                        {title}
                        {
                            me.get('id') === user.id&&(
                                <div className={classes.actions}>
                                    <IconButton
                                        size={"small"}
                                    >
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton
                                        size={"small"}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                </div>
                            )
                        }
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={1} alignItems={"center"}>
                        <IconButton
                            onClick={() => setDetailExpand(x => !x)}
                        >
                            <ExpandMoreIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Collapse in={detailExpand}>
                <table className={`table table-bordered table-hover ${classes.table}`}>
                    <tr>
                        <td>
                            <Typography className={classes.tableTitle}>
                                مدرس
                            </Typography>
                        </td>
                        <td>
                            <Typography
                                component={Link}
                                to={`/instructor/${user.id}`}
                            >
                                <Grid container alignItems={"center"}>
                                    <Avatar
                                        className={classes.avatar}
                                    >
                                        {`${user.firstName[0]} ${user.lastName[0]}`}
                                    </Avatar>
                                    <Typography
                                        className={classes.userName}
                                        display={"inline"}
                                    >
                                        {`${user.firstName} ${user.lastName}`}
                                    </Typography>
                                </Grid>
                            </Typography>
                        </td>
                    </tr>
                </table>
            </Collapse>
        </Paper>
    );
}

export default CourseSingle;