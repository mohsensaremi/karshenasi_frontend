import {compose, flattenProp} from "recompose";
import CourseSingle from '../../components/CourseSingle';
import withMe from 'app/packages/auth/src/decorators/withMe';

export default compose(
    withMe,
    flattenProp('data'),
)(CourseSingle);
