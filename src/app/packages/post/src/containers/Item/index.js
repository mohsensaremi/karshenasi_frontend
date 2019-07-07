import {compose, flattenProp} from "recompose";
import Item from '../../components/Item';
import withMe from 'app/packages/auth/src/decorators/withMe';

export default compose(
    withMe,
    flattenProp('data'),
)(Item);
