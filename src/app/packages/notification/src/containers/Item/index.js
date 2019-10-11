import {compose, flattenProp} from "recompose";
import Item from '../../components/Item';
import store from './store';
import handlers from './handlers';
import withPostHttp from 'app/network/withPostHttp';

export default compose(
    withPostHttp,
    flattenProp('data'),
    store,
    handlers,
)(Item);
