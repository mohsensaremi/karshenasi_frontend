import {compose} from "recompose";
import List from '../../components/List';
import {withRouter} from 'react-router-dom';

export default compose(
    withRouter,
)(List);
