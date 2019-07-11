import React from 'react';
import CoursesList from 'app/packages/course/src/containers/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';

const Instructor = (props) => {

    const {
        classes,
        match,
        firstName,
        lastName,
        email,
    } = props;


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={1} alignItems={"center"} justify={"space-between"}>
                    <Grid item>
                        <Typography
                            variant={"h1"}
                            component={Grid}
                            container
                            alignItems={"center"}
                        >
                            <Avatar className={classes.avatar}>
                                <FaceIcon/>
                            </Avatar>
                            {`${firstName} ${lastName}`}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            component={"a"}
                            href={`mailto:${email}`}
                            className={classes.email}
                        >
                            {email}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <CoursesList
                url={`/course/by-user-id?userId=${match.params.id}`}
                showAddButton={false}
            />
        </div>
    );
};

export default Instructor;