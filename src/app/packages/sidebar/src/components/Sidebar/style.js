import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        '& $paper:last-child': {
            marginBottom: 0,
        },
    },
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    avatar: {
        marginBottom: theme.spacing(),
    },
    type: {
        marginLeft: theme.spacing(0.5),
        color: theme.palette.text.secondary,
        fontSize: 11,
    },
    button: {
        justifyContent: 'flex-start',
    },
    buttonIcon:{
        color:theme.palette.primary.main,
        marginRight:theme.spacing(),
    },
}));
