import {compose, withState, onlyUpdateForKeys} from 'recompose';
import Uploader from '../../components/Uploader';
import handlers from './handlers';

export default compose(
    withState('files', 'setFiles', []),
    handlers,
    onlyUpdateForKeys(['value','classes']),
)(Uploader);
