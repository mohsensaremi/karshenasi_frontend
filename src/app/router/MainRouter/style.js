import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    limitWidth: {
        maxWidth: theme.variables.maxWidth,
        margin: 'auto',
    },
    toolbar: {
        marginBottom: theme.spacing(2),
    },
    tabs: {
        marginBottom: theme.spacing(2),
    },
}), {flip: false});
