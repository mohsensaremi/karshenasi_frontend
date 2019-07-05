import {compose, lifecycle} from "recompose";
import DataTable from '../../components/DataTable';
import store from './store';
import withDataTable from '../../decorators/withDataTable';
import withDataTableNetwork from '../../decorators/withDataTableNetwork';

export default compose(
    withDataTable,
    withDataTableNetwork({name: "withDataTable"}),
    lifecycle({
        componentDidMount() {
            if (typeof this.props.onMount === 'function') {
                this.props.onMount({
                    reload: this.props.tableFetchFn,
                })
            }
        },
    }),
    store,
)(DataTable);
