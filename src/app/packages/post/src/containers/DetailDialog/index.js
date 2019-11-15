import {compose, withState} from "recompose";
import DetailDialog from '../../components/DetailDialog';
import {withDialog} from "packages/dialog/src/hoc";
import handlers from './handlers';
import withPostHttp from 'app/network/withPostHttp';

export default compose(
    withDialog({
        name: "postDetail",
    }),
    withPostHttp,
    withState("loading", "setLoading", false),
    withState("grade", "setGrade", null),
    withState("attendance", "setAttendance", null),
    handlers,
)(DetailDialog);
