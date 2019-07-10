import {compose, withState} from "recompose";
import Calendar from '../../components/Calendar';
import network from "app/network";
import handlers from './handlers';

export default compose(
    withState('stateMonth', 'setStateMonth', null),
    network(props => {
        return {
            fetch: `/calendar/get${props.stateMonth ? `?month=${props.stateMonth}` : ''}`,
        };
    }),
    handlers,
)(Calendar);
