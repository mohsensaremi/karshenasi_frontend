import {compose, onlyUpdateForKeys,withState} from 'recompose';
import Item from './Item';

export default compose(
    onlyUpdateForKeys(['value','classes']),
    withState('progress','setProgress',0),
)(Item);
