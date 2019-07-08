import {compose} from "recompose";
import Sidebar from '../../components/Sidebar';
import withMe from 'app/packages/auth/src/decorators/withMe';
import withPostHttp from 'app/network/withPostHttp';
import handlers from './handlers';

export default compose(
    withMe,
    withPostHttp,
    handlers,
)(Sidebar);
