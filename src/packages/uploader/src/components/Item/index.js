import {compose} from 'recompose';
import Item from './Item';
import style from './style';

export default compose(
    style,
)(Item);
