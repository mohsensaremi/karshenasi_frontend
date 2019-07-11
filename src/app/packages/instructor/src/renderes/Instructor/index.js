import {compose} from "recompose";
import Instructor from './Instructor';
import network from "app/network";

export default compose(
    network(props => {
        return {
            fetch: `/user/by-id?userId=${props.match.params.id}`,
        }
    }),
)(Instructor);
