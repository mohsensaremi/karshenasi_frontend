import {compose} from "recompose";
import CourseSingle from './CourseSingle';
import network from "app/network";

export default compose(
    network(props => {
        return {
            fetch: `/course/by-id?id=${props.match.params.id}&withUser=true`,
        }
    }),
)(CourseSingle);
