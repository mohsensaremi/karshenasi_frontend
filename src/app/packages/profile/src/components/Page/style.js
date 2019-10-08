import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    cover: {
        cursor: "pointer",
    },
    avatarWrapper: {
        marginTop: -32,
    },
    avatar: {
        width: 64,
        height: 64,
        boxShadow: theme.shadows[2],
        cursor: "pointer",
    },
}));
