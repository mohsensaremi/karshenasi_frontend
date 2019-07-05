import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    content: {
        overflowX: 'hidden',
    },
    menu: {
        borderLeft: `1px solid ${theme.palette.divider}`,
        overflow: 'hidden',
        transition: theme.variables.transition,
        maxWidth: 250,
        height: 'calc(100vh - 64px)',
    },
    menuBody: {
        width: 250,
    },
    menuClosed: {
        maxWidth: 0,
    },
    avatarContainer: {
        height: 64,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    wrapper: {
        padding: theme.spacing.unit * 3,
        boxSizing: 'border-box',
    },
}), {flip: false});
