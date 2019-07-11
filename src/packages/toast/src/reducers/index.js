import {types} from '../actions';
import {combineReducers} from 'redux';

const defaultData = {
    messages: [],
    variant: 'success',
    autoHideDuration: 6000000,
};

const open = (state = false, action) => {
    switch (action.type) {
        case types.OPEN:
            return true;
        case types.CLOSE:
            return false;
        default:
            return state;
    }
};

const variant = (state = defaultData.variant, action) => {
    switch (action.type) {
        case types.OPEN:
            return action.data.variant;
        default:
            return state;
    }
};

const messages = (state = defaultData.messages, action) => {
    switch (action.type) {
        case types.OPEN:
            return action.data.messages;
        default:
            return state;
    }
};

const autoHideDuration = (state = defaultData.autoHideDuration, action) => {
    switch (action.type) {
        case types.OPEN:
            return action.data.autoHideDuration || state;
        default:
            return state;
    }
};

export default combineReducers({
    open,
    variant,
    messages,
    autoHideDuration,
})