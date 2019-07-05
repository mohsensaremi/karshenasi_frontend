import {compose} from "recompose";
import List from '../../components/List';
import withDataTable from 'packages/data-table/src/decorators/withDataTable';
import withDataTableNetwork from 'packages/data-table/src/decorators/withDataTableNetwork';

export default compose(
    withDataTable,
    withDataTableNetwork({
        name: "listFetch",
        url: "/course/owned-courses",
    })
)(List);
