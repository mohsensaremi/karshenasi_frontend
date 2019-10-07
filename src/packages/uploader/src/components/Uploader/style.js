import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    root: {
        border: `3px dashed ${theme.palette.grey[300]}`,
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 2,
        outline: 'none',
        boxSizing: 'border-box',
        minHeight: 120,
    },
    rootEmpty: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    uploadButton: {
        marginTop: theme.spacing(),
        borderRadius: 30,
    },
    uploadHint: {
        whiteSpace: 'pre-line',
        textAlign: 'center',
        fontSize: 10,
    },
}));
