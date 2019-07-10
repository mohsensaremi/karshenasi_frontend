import {compose} from "recompose";
import Calendar from '../../components/Calendar';
import network from "app/network";

export default compose(
    network(props => {
        return {
            fetch: `/calendar/get`,
        }
    }),
)(Calendar);
