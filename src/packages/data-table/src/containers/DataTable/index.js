import {compose, withState, lifecycle} from "recompose";
import DataTable from '../../components/DataTable';
import handlers from './handlers';
import store from './store';
import network from 'app/network';
import {buildQueryString} from 'utils/utils/url';

export default compose(
    withState('data', 'setData', []),
    withState('total', 'setTotal', 0),
    withState('searchInput', 'setSearchInput', ""),
    withState('search', 'setSearch', ""),
    withState('settings', 'setSettings', props => ({
        orderBy: props.orderBy || '_id',
        order: props.order || 'desc',
        skip: props.skip || 0,
        limit: props.limit || 25,
    })),
    network(props => {
        return {
            tableFetch: `${props.url}?${buildQueryString(props.settings)}${props.search ? `&search=${props.search}&searchColumns=${props.searchColumns.join('&searchColumns=')}` : ``}`,
            tableFetchFn: () => ({
                tableFetch: {
                    url: `${props.url}?${buildQueryString(props.settings)}${props.search ? `&search=${props.search}&searchColumns=${props.searchColumns.join('&searchColumns=')}` : ``}`,
                    force: true,
                },
            }),
        }
    }),
    handlers,
    lifecycle({
        componentDidMount() {
            if (typeof this.props.onMount === 'function') {
                this.props.onMount({
                    reload: this.props.tableFetchFn,
                })
            }
        },
        componentDidUpdate(prevProps) {
            const {
                tableFetch,
                setTotal,
                setData,
            } = this.props;
            if (prevProps && prevProps.tableFetch.fulfilled !== tableFetch.fulfilled && tableFetch.fulfilled && tableFetch.value && tableFetch.value.data) {
                if (tableFetch.value.data.data) {
                    setData(tableFetch.value.data.data);
                }
                if (tableFetch.value.data.total) {
                    setTotal(tableFetch.value.data.total);
                }
            }
        }
    }),
    store,
)(DataTable);
