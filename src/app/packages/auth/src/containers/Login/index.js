import {compose} from "recompose";
import Login from '../../components/Login';
import {reduxForm} from "redux-form";
import handlers from './handlers';
import withPostHttp from 'app/network/withPostHttp';

export default compose(
    reduxForm({
        form: 'login',
    }),
    withPostHttp,
    handlers,
)(Login);
