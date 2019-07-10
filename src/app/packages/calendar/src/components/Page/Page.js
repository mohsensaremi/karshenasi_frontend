import React from 'react';
import Paper from '@material-ui/core/Paper';
import Calendar from '../../containers/Calendar';

const Page = (props) => {

    const {
        classes,

    } = props;

    return (
        <Paper className={classes.root}>
            <Calendar/>
        </Paper>
    );
};

export default Page;