import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LoadMe from 'app/packages/auth/src/containers/LoadMe';
import classnames from 'classnames';
import Toolbar from 'app/packages/header/src/containers/Toolbar';
import Tabs from 'app/packages/header/src/containers/Tabs';

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
                        <Toolbar
                            classes={{
                                root: classes.toolbar,
                            }}
                        />
                        <div className={classes.limitWidth}>
                            <Tabs/>
                        </div>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
};

export default MainRouter;
