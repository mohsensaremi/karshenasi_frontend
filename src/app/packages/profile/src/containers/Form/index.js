import {compose, withProps} from "recompose";
import Form from '../../components/Form';
import withMe from 'app/packages/auth/src/decorators/withMe';
import {reduxForm} from "redux-form";
import pick from 'lodash/pick';
import hooks from './hooks';
import withHooks from 'utils/utils/withHooks';
import withPostHttp from 'app/network/withPostHttp';
import {withGlobalState} from 'packages/global-state';

export default compose(
    withMe,
    withProps((props) => ({
        initialValues: pick(props.me ? props.me.toJS() : {}, ['firstName', 'lastName', 'email']),
    })),
    reduxForm({
        form: "profile",
    }),
    withPostHttp,
    withGlobalState,
    withHooks(hooks),
)(Form);
