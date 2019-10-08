import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        height: 200,
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.grey[100],
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,.1)',
    },
}));
