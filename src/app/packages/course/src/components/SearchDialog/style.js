import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    results: {
        height: 350,
    },
    avatar: {
        marginLeft: theme.spacing(),
    },
    notResult: {
        color: theme.palette.text.secondary,
        margin: theme.spacing(3, 0),
        textAlign: 'center',
    },
}), {flip: false});
