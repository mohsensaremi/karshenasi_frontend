import {createMuiTheme} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';

let theme = createMuiTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: teal['500'],
            light: teal['500'],
            dark: teal['500'],
        },
        secondary: {
            main: red['A400'],
            contrastText: '#fff',
        },
    },
    typography: {
        useNextVariants: true,
        fontFamily: 'IRANSans',
        fontSize: 12,
        body2: {
            lineHeight: '24px',
        }
    },
});

theme = {
    ...theme,
    variable: {
        maxWidth: 1000,
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
