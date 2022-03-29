import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger';

import RootReducer from "./reducers/RootReducer";
import WatcherSaga from "./saga/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(WatcherSaga);

export default Store;
