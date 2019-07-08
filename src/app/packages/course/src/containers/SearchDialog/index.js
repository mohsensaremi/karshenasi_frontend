import {compose, withState} from "recompose";
import SearchDialog from '../../components/SearchDialog';
import {withDialog} from "packages/dialog/src/hoc";
import handlers from './handlers';
import withPostHttp from 'app/network/withPostHttp';
import network from "../../../../../network";

export default compose(
    withDialog({
        name: "joinCourse",
    }),
    withPostHttp,
    withState('input', 'setInput', ''),
    network(() => {
        return {
            sendSearchFetch: (input) => ({
                searchFetch: {
                    url: `/course/similar?input=${input}`,
                    force: true,
                },
            }),
        }
    }),
    handlers,
)(SearchDialog);
