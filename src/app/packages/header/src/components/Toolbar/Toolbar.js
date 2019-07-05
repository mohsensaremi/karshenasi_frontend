import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Toolbar = (props) => {

    const {
        classes
    } = props;

    return (
        <AppBar position="static" className={classes.root}>
            <MuiToolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </MuiToolbar>
        </AppBar>
    );
}

export default Toolbar;