import {withHandlers} from "recompose";
import debounce from 'lodash/debounce';

const mergeSettings = (newSettings) => (settings) => ({
    ...settings,
    forwardPaging: false,
    backwardPaging: false,
    ...newSettings,
});

export default withHandlers({
    onNextPage: ({settings, setSettings}) => () => {
        setSettings(mergeSettings({
            skip: settings.skip + settings.limit,
            forwardPaging: true,
        }));
    },
    onPrevPage: ({settings, setSettings}) => () => {
        setSettings(mergeSettings({
            skip: settings.skip - settings.limit,
            backwardPaging: true,
        }));
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
    onChangeSearch: (props) => (e) => {
        const {setSearchInput} = props;
        const value = e.target.value;
        setSearchInput(value);
        setStateDebounced(value, props);
    },
});

const setStateDebounced = debounce((value, {setSettings}) => {
    setSettings(mergeSettings({
        skip: 0,
        search: value,
    }));
}, 1000);
