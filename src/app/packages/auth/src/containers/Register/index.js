import {compose} from "recompose";
import Register from '../../components/Register';
import {reduxForm} from "redux-form";
import handlers from './handlers';
import withPostHttp from 'app/network/withPostHttp';

export default compose(
    reduxForm({
        form: 'register',
        initialValues: {
            type: 'student',
        },
    }),
    withPostHttp,
    handlers,
)(Register);
