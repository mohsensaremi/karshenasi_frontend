import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.dark,
        padding: theme.spacing(2),
        flexDirection: 'column',
        boxSizing: 'border-box',
    },
    logo: {
        marginBottom: theme.spacing(2),
        marginTop: -81,
    },
    paper: {
        maxWidth: 400,
        padding: theme.spacing(2),
    },
    buttonWrapper: {
        marginTop: theme.spacing(),
        textAlign: 'right',
    },
    link: {
        marginLeft: 4,
        color: theme.palette.primary.main,
    },
}));
