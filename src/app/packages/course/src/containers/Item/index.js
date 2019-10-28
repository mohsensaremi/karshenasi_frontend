import {compose, flattenProp, withState, lifecycle, shallowEqual} from "recompose";
import Item from '../../components/Item';
import withMe from 'app/packages/auth/src/decorators/withMe';
import withIsInstructor from 'app/packages/auth/src/decorators/withIsInstructor';
import store from './store';
import handlers from './handlers';
import withPostHttp from 'app/network/withPostHttp';

export default compose(
    withMe,
    withIsInstructor,
    withPostHttp,
    withState('loading', 'setLoading', false),
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
