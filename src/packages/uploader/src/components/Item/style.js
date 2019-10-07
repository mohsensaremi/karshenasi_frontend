import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        position: 'relative',
        margin: 2,
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        '&:hover $overlay': {
            opacity: 1,
        },
    },
    image: {
        width: 96,
        height: 96,
        objectFit: 'cover',
    },
    progressWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.action.hover,
        transition: theme.transitions.create("all", {
            duration: theme.transitions.duration.shortest,
        }),
        opacity: 0,
    },
    deleteIcon: {
        color: theme.palette.error.main,
        position: 'absolute',
        top: 0,
        right: 0,
        cursor: 'pointer',
    },
}));
