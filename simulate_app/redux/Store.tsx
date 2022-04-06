import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import RootReducer from "./reducers/RootReducer";
import WatcherSaga from "./saga/RootSaga";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(WatcherSaga);

export default Store;
