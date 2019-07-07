import {compose} from "recompose";
import Tabs from '../../components/Tabs';
import {withRouter} from 'react-router-dom';
import store from './store';

export default compose(
    withRouter,
    store,
)(Tabs);
