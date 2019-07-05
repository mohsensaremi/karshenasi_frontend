import {compose} from 'recompose';
import style from './style';
import SnackbarContent from './SnackbarContent';

export default compose(
    style,
)(SnackbarContent);