import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from 'img/logo-white-2.png';

const Toolbar = (props) => {

    const {
        classes
    } = props;

    return (
        <AppBar position="static" className={classes.root}>
            <MuiToolbar>
                <Typography
                    variant="h6"
                    className={classes.title}
                    component={Grid}
                    container
                    alignItems={"center"}
                >
                    <img
                        src={logo}
                        className={classes.logo}
                    />
                    دانشگاه خوارزمی
                </Typography>
            </MuiToolbar>
        </AppBar>
    );
}

export default Toolbar;