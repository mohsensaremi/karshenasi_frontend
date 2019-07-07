import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LoadMe from 'app/packages/auth/src/containers/LoadMe';
import classnames from 'classnames';
import Toolbar from 'app/packages/header/src/containers/Toolbar';
import Sidebar from 'app/packages/sidebar/src/containers/Sidebar';
import CourseList from 'app/packages/course/src/containers/List';
import CourseSingle from 'app/packages/course-single/src/renderes/CourseSingle';

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
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={3}>
                                    <Sidebar/>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Switch>
                                        <Route exact path={'/courses'} component={CourseList}/>
                                        <Route path={'/course/:id'} component={CourseSingle}/>
                                        <Redirect to={"/courses"}/>
                                    </Switch>
                                </Grid>
                            </Grid>
                        </div>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
};

export default MainRouter;
