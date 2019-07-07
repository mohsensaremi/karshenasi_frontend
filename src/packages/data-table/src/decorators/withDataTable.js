import {compose, withState} from "recompose";
import handlers from './handlers';

export default compose(
    withState('searchingState', 'setSearchingState', false),
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
