import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LoadMe from 'app/packages/auth/src/containers/LoadMe';
import classnames from 'classnames';
import Toolbar from 'app/packages/header/src/containers/Toolbar';

const MainRouter = (props) => {

    const {
        classes,
        me,
    } = props;

    return (
        <React.Fragment>
            <LoadMe/>
            {
                me && (
                    <React.Fragment>
                        <Toolbar/>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
};

export default MainRouter;
