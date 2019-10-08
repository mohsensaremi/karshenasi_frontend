import {compose} from "recompose";
import Cover from '../../components/Cover';
import withMe from 'app/packages/auth/src/decorators/withMe';

export default compose(
    withMe,
)(Cover);
