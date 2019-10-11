import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    listItemText: {
        margin: 0,
    },
}));
