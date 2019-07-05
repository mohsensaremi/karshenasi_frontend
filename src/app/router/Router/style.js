import withStyles from '@material-ui/core/styles/withStyles';
import theme from 'app/themes/theme1';

export default withStyles({
    '@global': {
        'body': {
            background: theme.palette.background.default,
            margin: 0,
        },
        ".inheritTypo": {
            fontSize: 'inherit',
            color: 'inherit',
            lineHeight: 'inherit',
            fontWeight: 'inherit',
        },
        ".limitWidth": {
            maxWidth: theme.variable.maxWidth,
            margin: 'auto',
        },
    },
}, {flip: false});
