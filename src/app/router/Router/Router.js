import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Toast} from 'packages/toast';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from 'app/themes/theme1';
import MainRouter from '../MainRouter';
import Login from 'app/packages/auth/src/containers/Login';
import Register from 'app/packages/auth/src/containers/Register';

const Router = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <Switch>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
                <Route component={MainRouter}/>
            </Switch>
            <Toast/>
        </MuiThemeProvider>
    );
};

export default Router;
