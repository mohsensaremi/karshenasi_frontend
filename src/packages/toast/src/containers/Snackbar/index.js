import {compose} from 'recompose';
import Snackbar from '../../components/Snackbar';
import store from './store';

export default compose(
    store,
)(Snackbar);