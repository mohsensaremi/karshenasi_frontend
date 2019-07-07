import {withHandlers} from "recompose";
import debounce from 'lodash/debounce';

const mergeSettings = (newSettings) => (settings) => ({
    ...settings,
    ...newSettings,
});

export default withHandlers({
    onNextPage: ({settings, setSettings}) => () => {
        setSettings(mergeSettings({skip: settings.skip + settings.limit}));
    },
    onPrevPage: ({settings, setSettings}) => () => {
        setSettings(mergeSettings({skip: settings.skip - settings.limit}));
    },
    onChangePage: ({settings, setSettings}) => (event, page) => {
        setSettings(mergeSettings({skip: page * settings.limit}));
    },
    onChangeRowsPerPage: ({setSettings}) => (event) => {
        setSettings(mergeSettings({limit: event.target.value}));
    },
    onClickSort: ({settings, setSettings}) => (property) => () => {
        const orderBy = property;
        let order = 'desc';

        if (settings.orderBy === property && settings.order === 'desc') {
            order = 'asc';
        }

        setSettings(mergeSettings({order, orderBy}));
    },
    onChangeSearch: ({setSearch, setSearchInput, setSearchingState}) => (e) => {
        const value = e.target.value;
        setSearchInput(value);
        setStateDebounced(setSearch, value, () => setSearchingState(true));
    },
});

const setStateDebounced = debounce((setState, value, then) => {
    setState(value, then);
}, 1000);
