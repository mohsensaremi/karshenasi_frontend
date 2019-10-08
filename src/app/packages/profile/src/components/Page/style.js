import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    cover: {
        backgroundColor: theme.palette.grey[100],
        height: 200,
    },
    avatarWrapper: {
        marginTop: -32,
    },
    avatar: {
        width: 64,
        height: 64,
        boxShadow: theme.shadows[2],
    },
}));
