import {compose, flattenProp, withState} from "recompose";
import CourseSingle from '../../components/CourseSingle';
import withMe from 'app/packages/auth/src/decorators/withMe';
import store from './store';
import handlers from './handlers';

export default compose(
    withMe,
    store,
    withState('data', 'setData', props=>props.data),
    flattenProp('data'),
    handlers,
)(CourseSingle);
