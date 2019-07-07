import React from 'react';
import {SetGlobalState} from 'packages/global-state';

const List = (props) => {

    const {
        classes,
        match,
    } = props;


    return (
        <div className={classes.root}>
            <SetGlobalState
                itemKey={"courseActiveTab"}
                itemValue={match.params.filter}
                shouldUpdate
            />
            posts list
        </div>
    );
}

export default List;