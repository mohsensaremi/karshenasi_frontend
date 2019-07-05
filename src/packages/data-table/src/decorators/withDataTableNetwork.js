import {compose, lifecycle} from "recompose";
import network from 'app/network';
import {buildQueryString} from 'utils/utils/url';

export default ({name, url, query, searchColumns}) => compose(
    network(props => {
        const s = {
            ...props.settings,
            ...query,
            ...props.query,
        };
        if (props.search && (searchColumns || props.searchColumns)) {
            s.search = props.search;
            s.searchColumns = (searchColumns || props.searchColumns).join('&searchColumns=');
        }

        const qs = buildQueryString(s);
        const requestUrl = `${url || props.url}?${qs}`;

        return {
            [name]: requestUrl,
            [`${name}Fn`]: () => ({
                [name]: {
                    url: requestUrl,
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
