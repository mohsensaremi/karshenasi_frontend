import withStyles from '@material-ui/core/styles/withStyles';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

export default withStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginLeft: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'pre-line',
        fontFamily: 'IRANSans',
    },
    action: {
        paddingLeft: 0,
        marginRight: 0,
    },
}), {flip: false});
