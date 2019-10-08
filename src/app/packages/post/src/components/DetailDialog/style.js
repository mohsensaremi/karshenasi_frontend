import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    title: {
        marginBottom: theme.spacing(2),
    },
    content: {
        lineHeight: '30px',
        fontWeight: 300,
    },
    dialogContent: {
        padding: theme.spacing(3),
    },
    paperScrollPaper: {
        minHeight: 'calc(100% - 96px)',
    },
    listItem: {
        borderTop: `1px solid ${theme.palette.grey[400]}`,
    },
}));
