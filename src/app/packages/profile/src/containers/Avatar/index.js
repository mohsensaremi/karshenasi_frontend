import {compose} from "recompose";
import Avatar from '../../components/Avatar';
import withMe from 'app/packages/auth/src/decorators/withMe';

export default compose(
    withMe,
)(Avatar);
