import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {},
    tab: {
        minWidth: 0,
    },
    icon: {
        marginLeft: theme.spacing(0.5),
    },
}), {flip: false});
