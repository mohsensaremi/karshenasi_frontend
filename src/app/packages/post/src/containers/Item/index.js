import {compose, flattenProp, withState} from "recompose";
import Item from '../../components/Item';
import withMe from 'app/packages/auth/src/decorators/withMe';
import store from './store';
import handlers from './handlers';
import withPostHttp from 'app/network/withPostHttp';

export default compose(
    withMe,
    withPostHttp,
    withState('loading', 'setLoading', false),
    flattenProp('data'),
    store,
    handlers,
)(Item);
