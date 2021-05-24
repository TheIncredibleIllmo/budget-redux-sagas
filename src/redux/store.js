import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from './reducers/entries.reducer';
import modalsReducer from './reducers/modals.reducer';
import createSagaMiddleware from 'redux-saga';
import { initSagas } from './sagas';

const combinedReducers = combineReducers({
    entries: entriesReducer,
    modals: modalsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

initSagas(sagaMiddleware);

export default store;
