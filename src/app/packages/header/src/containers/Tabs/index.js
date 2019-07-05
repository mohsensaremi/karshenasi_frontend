import {compose} from "recompose";
import Tabs from '../../components/Tabs';
import {withRouter} from 'react-router-dom';

export default compose(
    withRouter,
)(Tabs);
