import {compose, withProps} from "recompose";
import List from '../../components/List';
import withDataTable from 'packages/data-table/src/decorators/withDataTable';
import withDataTableNetwork from 'packages/data-table/src/decorators/withDataTableNetwork';
import store from './store';
import handlers from './handlers';
import withIsInstructor from 'app/packages/auth/src/decorators/withIsInstructor';

export default compose(
    withIsInstructor,
    withProps(props => ({
        name: "listFetch",
        url: props.isInstructor ? "/course/owned-courses" : "/course/joined-courses",
        searchColumns: ["title"],
        limit: 6,
    })),
    withDataTable,
    withDataTableNetwork,
    store,
    handlers,
)(List);
