import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import dataSetter  from './reducers/dataSetter';

const reducers = combineReducers ({
    dataSetter
});

const store = createStore(
    reducers,
    {},
    composeWithDevTools()
);

export default store;