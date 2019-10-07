import withStyles from '@material-ui/core/styles/withStyles';
import theme from 'app/themes/theme1';
import logo from 'img/logo-white.png';

export default withStyles({
    '@global': {
        'body': {
            backgroundColor: theme.palette.background.default,
            backgroundImage: `url("${logo}")`,
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
});
