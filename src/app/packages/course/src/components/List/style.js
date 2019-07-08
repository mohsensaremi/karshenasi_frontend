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

    },
    toolbar: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}), {flip: false});
