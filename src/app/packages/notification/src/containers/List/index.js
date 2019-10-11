import {compose, withProps} from "recompose";
import List from '../../components/List';
import withDataTable from 'packages/data-table/src/decorators/withDataTable';
import withDataTableNetwork from 'packages/data-table/src/decorators/withDataTableNetwork';

export default compose(
    withProps(props => ({
        name: "listFetch",
        url: `/notification/list`,
        limit: 10,
        paging: "append",
    })),
    withDataTable,
    withDataTableNetwork,
)(List);
