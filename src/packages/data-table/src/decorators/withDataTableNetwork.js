import {compose, lifecycle, withState, withProps} from "recompose";
import network from 'app/network';
import {buildQueryString} from 'utils/utils/url';
import handlers from './handlers2';
import omit from 'lodash/omit';

export default compose(
    network(props => {
        const s = omit({
            ...props.settings,
            ...props.query,
        }, ['search', 'forwardPaging', 'backwardPaging']);
        if (props.settings.search && props.searchColumns) {
            s.search = props.settings.search;
            s.searchColumns = props.searchColumns.join('&searchColumns=');
        }

        const qs = buildQueryString(s);
        const requestUrl = `${props.url}?${qs}`;

        return {
            [props.name]: {
                url: requestUrl,
            },
            [`${props.name}Fn`]: () => ({
                [props.name]: {
                    url: requestUrl,
                    force: true,
                },
            }),
        }
    }),
    withState('data', 'setData', []),
    withState('total', 'setTotal', 0),
    withProps(props => ({
        hasNext: props.total - (props.settings.skip + props.settings.limit) > 0,
    })),
    handlers,
    lifecycle({
        componentDidUpdate(prevProps) {
            const {
                setTotal,
                setData,
                settings,
            } = this.props;
            const tableFetch = this.props[this.props.name];
            const prevTableFetch = prevProps && prevProps[this.props.name];

            if (prevTableFetch && prevTableFetch.fulfilled !== tableFetch.fulfilled && tableFetch.value && tableFetch.value.data) {
                if (tableFetch.value.data.data) {
                    const newData = tableFetch.value.data.data;
                    if (settings.forwardPaging) {
                        setData(x => ([...x, ...newData]));
                    } else if (settings.backwardPaging) {
                        setData(x => ([...newData, ...x]));
                    } else {
                        setData(newData);
                    }
                }
                if (tableFetch.value.data.total) {
                    setTotal(tableFetch.value.data.total);
                }
            }
        }
    }),
);
