import {compose, flattenProp} from "recompose";
import Item from '../../components/Item';

export default compose(
    flattenProp('data'),
)(Item);
