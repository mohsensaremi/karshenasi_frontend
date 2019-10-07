import withStyles from '@material-ui/core/styles/withStyles';
import blue from '@material-ui/core/colors/blue';

export default withStyles(theme => ({
    root: {},
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(),
    },
    email: {
        color: blue[500],
        textDecoration: 'underline',
    },
    avatar: {
        marginRight: theme.spacing(),
    },
}));
