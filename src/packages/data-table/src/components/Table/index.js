import {compose, onlyUpdateForKeys} from "recompose";
import style from './style';
import Table from './Table';

export default compose(
    onlyUpdateForKeys(['limit', 'skip', 'order', 'orderBy', 'loading', 'children']),
    style,
)(Table);
