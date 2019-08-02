import {compose} from "recompose";
import Members from '../../components/Members';
import store from './store';
import network from "app/network";

export default compose(
    store,
    network(props => {
        return {
            fetch: `/course/members?courseId=${props.courseId}`,
        }
    }),
)(Members);
