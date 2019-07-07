import {compose, flattenProp, withState, withProps} from "recompose";
import CourseSingle from '../../components/CourseSingle';
import withMe from 'app/packages/auth/src/decorators/withMe';
import merge from 'lodash/merge';
import store from './store';
import handlers from './handlers';

export default compose(
    withMe,
    store,
    withState('updatedData', 'setUpdatedData', null),
    withProps(props => ({
        data: merge(props.data, props.updatedData),
    })),
    flattenProp('data'),
    handlers,
)(CourseSingle);
