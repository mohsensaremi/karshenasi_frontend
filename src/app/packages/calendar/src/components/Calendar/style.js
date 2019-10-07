import withStyles from '@material-ui/core/styles/withStyles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';

export default withStyles(theme => ({
    root: {},
    tr: {
        position: 'relative',
        height: 50,
    },
    day: {
        position: 'absolute',
        top: 4,
        right: 4,
    },
    eventsWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    icon: {
        marginRight: 2,
    },
    iconAlert1: {
        color: theme.palette.error.main,
    },
    iconAlert2: {
        color: blue[500],
    },
    iconAlert3: {
        color: purple[500],
    },
    header: {
        marginBottom: theme.spacing(2),
    },
}));
