import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const configureStore = () => {

    const defaultMiddleware = applyMiddleware();
    let middleware = undefined;
    if (process.env.NODE_ENV === 'production') {
        middleware = defaultMiddleware;
    } else {
        middleware = composeWithDevTools(defaultMiddleware);
    }
    return createStore(reducers, undefined, middleware);
};

const store = configureStore();

export default store;
