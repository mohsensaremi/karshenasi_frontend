import {compose, flattenProp, withState} from "recompose";
import Instructor from '../../components/Instructor';
import {withRouter} from 'react-router-dom';

export default compose(
    withRouter,
    withState('data', 'setData', props => props.data),
    flattenProp('data'),
)(Instructor);
