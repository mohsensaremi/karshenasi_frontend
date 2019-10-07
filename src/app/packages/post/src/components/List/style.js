import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {},
    loading: {
        textAlign: 'center',
    },
    hint: {
        textAlign: 'center',
        margin: theme.spacing(5, 0),
    },
    hintButton: {
        marginTop: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(),
    },
    toolbar: {
        marginBottom: theme.spacing(2),
    },
}));
