import {compose, flattenProp} from "recompose";
import Item from '../../components/Item';
import withMe from 'app/packages/auth/src/decorators/withMe';
import store from './store';
import handlers from './handlers';

export default compose(
    withMe,
    flattenProp('data'),
    store,
    handlers,
)(Item);
