import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    title: {
        fontSize: 16,
        marginBottom: theme.spacing(2),
    },
    userAvatar: {
        width: 28,
        height: 28,
        marginLeft: theme.spacing(0.5),
    },
    user: {
        fontSize: 12,
        color: theme.palette.text.secondary,
    },
}), {flip: false});
