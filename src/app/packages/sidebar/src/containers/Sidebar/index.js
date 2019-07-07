import {compose} from "recompose";
import Sidebar from '../../components/Sidebar';
import withMe from 'app/packages/auth/src/decorators/withMe';

export default compose(
    withMe,
)(Sidebar);
