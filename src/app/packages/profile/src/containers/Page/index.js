import {compose} from "recompose";
import Page from '../../components/Page';
import hooks from './hooks';
import withHooks from 'utils/utils/withHooks';
import withPostHttp from 'app/network/withPostHttp';
import {withGlobalState} from 'packages/global-state';

export default compose(
    withPostHttp,
    withGlobalState,
    withHooks(hooks),
)(Page);
