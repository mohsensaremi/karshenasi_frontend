import {withHandlers} from "recompose";
import debounce from 'lodash/debounce';

const mergeSettings = (newSettings) => (settings) => ({
    ...settings,
    ...newSettings,
});

export default withHandlers({
    appendData: ({setData, settings}) => (data) => {
        setData(x => ([
            ...data,
            ...x,
        ]));
        settings.skip += data.length; // mutate state for prevent refreshing
    },
    prependData: ({setData, settings}) => (data) => {
        setData(x => ([
            ...x,
            ...data,
        ]));
        settings.skip += data.length; // mutate state for prevent refreshing
    },
    pushFirstData: ({setData, settings}) => (data) => {
        setData(x => ([
            data,
            ...x,
        ]));
        settings.skip++; // mutate state for prevent refreshing
    },
    pushLastData: ({setData, settings}) => (data) => {
        setData(x => ([
            ...x,
            data,
        ]));
        settings.skip++; // mutate state for prevent refreshing
    },
    updateItemInData: ({setData, data}) => (item, indexFinder) => {
        const defaultIndexFinder = (x, y) => x.id === y.id;
        const index = data.findIndex(x => (indexFinder || defaultIndexFinder)(x, item));
        if (index >= 0) {
            setData(x => ([
                ...x.slice(0, index),
                item,
                ...x.slice(index + 1),
            ]));
        }
    },
    deleteItemInData: ({setData, data, settings}) => (item, indexFinder) => {
        const defaultIndexFinder = (x, y) => x.id === y.id;
        const index = data.findIndex(x => (indexFinder || defaultIndexFinder)(x, item));
        if (index >= 0) {
            setData(x => ([
                ...x.slice(0, index),
                ...x.slice(index + 1),
            ]));
            settings.skip--; // mutate state for prevent refreshing
        }
    },
});

const setStateDebounced = debounce((setState, value) => {
    setState(value);
}, 1000);
