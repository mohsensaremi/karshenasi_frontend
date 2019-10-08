import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LoadMe from 'app/packages/auth/src/containers/LoadMe';
import Toolbar from 'app/packages/header/src/containers/Toolbar';
import Sidebar from 'app/packages/sidebar/src/containers/Sidebar';
import CourseList from 'app/packages/course/src/containers/List';
import CourseSingle from 'app/packages/course-single/src/renderes/CourseSingle';
import Instructor from 'app/packages/instructor/src/renderes/Instructor';
import Calendar from 'app/packages/calendar/src/containers/Page';
import Profile from 'app/packages/profile/src/containers/Page';
import {StickyContainer, Sticky} from 'react-sticky';

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
                            <StickyContainer>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={3}>
                                        <Sticky topOffset={8}>
                                            {({
                                                  style,
                                              }) => (
                                                <div style={style}>
                                                    <Sidebar/>
                                                </div>
                                            )}
                                        </Sticky>
                                    </Grid>
                                    <Grid item xs={12} md={9}>
                                        <Switch>
                                            <Route exact path={'/calendar'} component={Calendar}/>
                                            <Route exact path={'/profile'} component={Profile}/>
                                            <Route exact path={'/courses'} component={CourseList}/>
                                            <Route exact path={'/instructor/:id'} component={Instructor}/>
                                            <Route path={'/course/:id'} component={CourseSingle}/>
                                            <Redirect to={"/courses"}/>
                                        </Switch>
                                    </Grid>
                                </Grid>
                            </StickyContainer>
                        </div>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
};

export default MainRouter;
