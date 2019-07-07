import {createMuiTheme} from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

let theme = createMuiTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: pink['A400'],
            contrastText: '#fff',
        },
        secondary: {
            main: pink['A400'],
            contrastText: '#fff',
        },
    },
    typography: {
        useNextVariants: true,
        fontFamily: 'IRANSans',
        fontSize: 12,
        body2: {
            lineHeight: '24px',
        },
        h1: {
            fontSize: 26,
        },
    },
    shape: {
        borderRadius: 10,
    },
});

theme = {
    ...theme,
    variable: {
        maxWidth: 900,
        transition: theme.transitions.create('all', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    props: {
        MuiCheckbox: {
            color: 'primary',
        },
        MuiRadio: {
            color: 'primary',
        },
        MuiSwitch: {
            color: 'primary',
        },
        MuiTableCell: {
            padding: 'dense',
        },
    },
    overrides: {
        MuiPaper: {
            rounded: {
                overflow: 'hidden',
            },
        },
        MuiDialogActions: {
            root: {
                margin: 0,
                padding: '8px 4px',
                borderTop: '1px solid #bbb',
            }
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid #bbb',
            }
        },
        MuiTableCell: {
            root: {
                textAlign: 'center'
            }
        },
    },
};

theme.variables = theme.variable;

export default theme;
