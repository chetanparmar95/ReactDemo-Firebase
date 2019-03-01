import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './../../internal/modules/Reducers';
import actionMiddleware from '../middleware/ActionMiddleware';
import promiseMiddleware from 'redux-promise';

const rootReducer = combineReducers({
    ...reducers
});

const enhancer = compose(
    applyMiddleware(
        promiseMiddleware,
        actionMiddleware(),
    ));

const configureStore = () => {
    return createStore(rootReducer, {}, enhancer);
}

export default configureStore;