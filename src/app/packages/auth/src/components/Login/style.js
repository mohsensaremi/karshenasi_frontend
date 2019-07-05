import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing.unit * 2,
        flexDirection: 'column',
        boxSizing: 'border-box',
    },
    logo: {
        marginBottom: theme.spacing.unit * 2,
        marginTop: -81,
    },
    paper: {
        maxWidth: 400,
        padding: theme.spacing.unit * 2,
    },
    buttonWrapper: {
        marginTop: theme.spacing.unit,
        textAlign: 'left',
    },
    link: {
        marginRight: 4,
        color: theme.palette.primary.main,
    },
}), {flip: false});
