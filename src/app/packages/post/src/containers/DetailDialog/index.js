import {compose} from "recompose";
import DetailDialog from '../../components/DetailDialog';
import {withDialog} from "packages/dialog/src/hoc";

export default compose(
    withDialog({
        name: "postDetail",
    }),
)(DetailDialog);
