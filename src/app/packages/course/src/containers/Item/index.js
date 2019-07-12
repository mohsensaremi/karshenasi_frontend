import {compose, flattenProp, withState, lifecycle, shallowEqual} from "recompose";
import Item from '../../components/Item';
import withMe from 'app/packages/auth/src/decorators/withMe';
import store from './store';
import handlers from './handlers';

export default compose(
    withMe,
    withState('localData', 'setLocalData', props => props.data),
    lifecycle({
        componentDidUpdate(prevProps) {
            if (!shallowEqual(prevProps.data, this.props.data)) {
                this.props.setLocalData(x => ({
                    ...x,
                    ...this.props.data,
                }));
            }
        }
    }),
    flattenProp('localData'),
    handlers,
    store,
)(Item);
