import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}), {flip: false});
