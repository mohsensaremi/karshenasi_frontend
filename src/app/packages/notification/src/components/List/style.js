import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {},
    loading: {
        textAlign: 'center',
    },
    noData: {
        padding: theme.spacing(),
        height: 100,
        color: theme.palette.text.disabled,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
    },
}));
