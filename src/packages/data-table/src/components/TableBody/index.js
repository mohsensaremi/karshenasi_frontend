import {compose, onlyUpdateForKeys} from "recompose";
import style from './style';
import TableBody from './TableBody';

export default compose(
    onlyUpdateForKeys(['data']),
    style,
)(TableBody);
