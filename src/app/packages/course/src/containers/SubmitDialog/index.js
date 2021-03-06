import {compose} from "recompose";
import SubmitDialog from '../../components/SubmitDialog';
import {withDialog} from "packages/dialog/src/hoc";
import {reduxForm} from "redux-form";
import handlers from './handlers';
import store from './store';
import withPostHttp from 'app/network/withPostHttp';

export default compose(
    withDialog({
        name: "course",
    }),
    reduxForm({
        form: "course",
    }),
    withPostHttp,
    store,
    handlers,
)(SubmitDialog);
