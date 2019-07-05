import {compose, lifecycle, defaultProps} from "recompose";
import network from 'app/network';
import {buildQueryString} from 'utils/utils/url';

export default compose(
    defaultProps({
        paging: "set",
    }),
    network(props => {
        const s = {
            ...props.settings,
            ...props.query,
        };
        if (props.search && props.searchColumns) {
            s.search = props.search;
            s.searchColumns = props.searchColumns.join('&searchColumns=');
        }

        const qs = buildQueryString(s);
        const requestUrl = `${props.url}?${qs}`;

        return {
            [props.name]: requestUrl,
            [`${props.name}Fn`]: () => ({
                [props.name]: {
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
                paging,
            } = this.props;
            const tableFetch = this.props[this.props.name];
            const prevTableFetch = prevProps && prevProps[this.props.name];

            if (prevTableFetch && prevTableFetch.fulfilled !== tableFetch.fulfilled && tableFetch.value && tableFetch.value.data) {
                if (tableFetch.value.data.data) {
                    const newData = tableFetch.value.data.data;
                    if (paging === "set") {
                        setData(newData);
                    } else if (paging === "append") {
                        setData(x => ([...x, ...newData]));
                    } else if (paging === "prepend") {
                        setData(x => ([...newData, ...x]));
                    }
                }
                if (tableFetch.value.data.total) {
                    setTotal(tableFetch.value.data.total);
                }
            }
        }
    }),
);
