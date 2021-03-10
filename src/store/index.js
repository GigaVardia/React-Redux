import {createStore, combineReducers} from 'redux';
import {cashReducer} from './cashReducer';
import {customReducer} from './customerReducer';

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customReducer
})

export const store = createStore(rootReducer)