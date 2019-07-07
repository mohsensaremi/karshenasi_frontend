import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    header: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
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
    tabWrapper: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: theme.spacing(2, -2, -2, -2),
    },
}), {flip: false});
