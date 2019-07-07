import {compose, withProps} from "recompose";
import List from '../../components/List';
import withDataTable from 'packages/data-table/src/decorators/withDataTable';
import withDataTableNetwork from 'packages/data-table/src/decorators/withDataTableNetwork';
import store from './store';
import handlers from './handlers';

export default compose(
    store,
    withProps(props => ({
        name: "listFetch",
        url: `/post/posts-by-course-id?courseId=${props.courseId}&type=${props.match.params.type}`,
        searchColumns: ["title"],
        limit: 10,
        paging: "append",
    })),
    withDataTable,
    withDataTableNetwork,
    handlers,
)(List);
