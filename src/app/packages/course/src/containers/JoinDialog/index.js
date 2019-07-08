import {compose, withState} from "recompose";
import JoinDialog from '../../components/JoinDialog';
import {withDialog} from "packages/dialog/src/hoc";
import handlers from './handlers';
import withPostHttp from 'app/network/withPostHttp';

export default compose(
    withDialog({
        name: "joinCourse",
    }),
    withPostHttp,
    withState('password', 'setPassword', ''),
    withState('loading', 'setLoading', false),
    handlers,
)(JoinDialog);
