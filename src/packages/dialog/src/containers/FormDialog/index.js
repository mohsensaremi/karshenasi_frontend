import {compose} from "recompose";
import FormDialog from '../../components/FormDialog';
import {reduxForm} from "redux-form";
import handlers from './handlers';

export default compose(
    reduxForm(),
    handlers,
)(FormDialog);
