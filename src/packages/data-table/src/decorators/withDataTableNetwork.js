import {compose, lifecycle} from "recompose";
import network from 'app/network';
import {buildQueryString} from 'utils/utils/url';

export default ({name, url, query}) => compose(
    network(props => {

        const s = {
            ...props.settings,
            ...query,
            ...props.query,
        };
        if (props.search && props.searchColumns) {
            s.search = props.search;
            s.searchColumns = props.searchColumns.join('&searchColumns=');
        }

        const qs = buildQueryString(s);

        return {
            [name]: `${url || props.url}?${qs}`,
            [`${name}Fn`]: () => ({
                [name]: {
                    url: `${url || props.url}?${qs}`,
                    force: true,
                },
            }),
        }
    }),
    lifecycle({
        componentDidUpdate(prevProps) {
            const {
                setTotal,
                setData,
            } = this.props;
            const tableFetch = this.props[name];
            const prevTableFetch = prevProps && prevProps[name];

            if (prevTableFetch && prevTableFetch.fulfilled !== tableFetch.fulfilled && tableFetch.value && tableFetch.value.data) {
                if (tableFetch.value.data.data) {
                    setData(tableFetch.value.data.data);
                }
                if (tableFetch.value.data.total) {
                    setTotal(tableFetch.value.data.total);
                }
            }
        }
    }),
);
