import {compose, flattenProp, withState} from "recompose";
import Item from '../../components/Item';
import withMe from 'app/packages/auth/src/decorators/withMe';
import store from './store';
import handlers from './handlers';

export default compose(
    withMe,
    withState('data', 'setData', props => props.data),
    flattenProp('data'),
    handlers,
    store,
)(Item);
