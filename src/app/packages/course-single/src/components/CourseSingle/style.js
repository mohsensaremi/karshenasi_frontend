import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    titleIcon: {
        marginLeft: theme.spacing(0.5),
    },
    table: {
        marginTop: theme.spacing(2),
    },
    avatar: {
        width: 28,
        height: 28,
        fontSize: 12,
        marginLeft: theme.spacing(0.5),
        backgroundColor: theme.palette.primary.main,
    },
    tableTitle: {
        color: theme.palette.text.secondary,
    },
    userName: {
        textDecoration: 'underline',
    },
    actions: {
        marginRight: theme.spacing(),
    },
}), {flip: false});
