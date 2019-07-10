import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles(theme => ({
    title: {},
    description: {},
    dialogContent: {
        padding: theme.spacing(2),
    },
    paperScrollPaper: {
        minHeight: 'calc(100% - 96px)',
    },
}), {flip: false});
