import {compose} from 'recompose';
import MainRouter from './MainRouter';
import style from './style';
import store from './store';

export default compose(
    store,
    style,
)(MainRouter);
