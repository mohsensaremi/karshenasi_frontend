import {fromJS, Map} from 'immutable';
import {types} from '../actions';

const initialState = Map({});

const globalState = (state = initialState, action) => {
    switch (action.type) {
        case types.SET:
            if (action.value && typeof action.value === 'object') {
                const newData = fromJS(action.value);
                const oldData = state.get(action.key);
                if (oldData && oldData.equals(newData)) {
                    return state;
                }

                return state.set(action.key, newData);
            } else {
                return state.set(action.key, action.value);
            }
        case types.UNSET:
            return state.delete(action.key);
        default:
            return state;
    }
};

export default globalState;