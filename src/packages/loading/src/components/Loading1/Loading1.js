import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
const Loading1 = (props) => {

    const {
        classes,
    } = props;

    return (
        <div className={classes.loadingWrapper}>
            <CircularProgress/>
        </div>
    )
}

export default Loading1;