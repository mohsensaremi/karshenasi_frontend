import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from '../../containers/Form';
import Avatar from '../../containers/Avatar';

const Page = (props) => {

    const {
        classes,
    } = props;

    return (
        <Paper>
            <div
                className={classes.cover}
            />
            <Grid
                container
                alignItems={'center'}
                justify={"center"}
                className={classes.avatarWrapper}
            >
                <Avatar
                className={classes.avatar}
                />
            </Grid>
            <Form/>
        </Paper>
    );
};

export default Page;
