import {combineReducers} from 'redux';
import {reducer as globalState} from 'packages/global-state';
import {reducer as dialog} from 'packages/dialog';
import {reducer as toast} from 'packages/toast';
import {reducer as form} from 'redux-form';

const reducers = combineReducers({
    dialog,
    toast,
    globalState,
    form,
});

export default reducers;
