import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    title: {
        fontSize: 16,
        marginBottom: theme.spacing(2),
    },
}), {flip: false});
