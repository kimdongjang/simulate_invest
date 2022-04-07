import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper, MakeStore } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import RootReducer from "./reducers/RootReducer";
import WatcherSaga from "./saga/RootSaga";

export const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const logger = createLogger();
    const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));
    // sagaMiddleware.run(WatcherSaga);

    return store;
};
export const wrapper = createWrapper(makeStore, { debug: true })