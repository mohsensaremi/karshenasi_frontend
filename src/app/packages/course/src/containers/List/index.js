import {compose, withProps} from "recompose";
import List from '../../components/List';
import withDataTable from 'packages/data-table/src/decorators/withDataTable';
import withDataTableNetwork from 'packages/data-table/src/decorators/withDataTableNetwork';
import store from './store';
import handlers from './handlers';

export default compose(
    withProps({
        name: "listFetch",
        url: "/course/owned-courses",
        searchColumns: ["title"],
        limit: 5,
        paging: "append",
    }),
    withDataTable,
    withDataTableNetwork,
    store,
    handlers,
)(List);
