import {compose, withState} from "recompose";
import handlers from './handlers';

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
    handlers,
);
