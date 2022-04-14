import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper, MakeStore } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import RootReducer from "./reducers/RootReducer";
import RootSaga from "./saga/RootSaga";

// export const makeStore = () => {
//     const sagaMiddleware = createSagaMiddleware();
//     const logger = createLogger();
//     const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));
//     // sagaMiddleware.run(WatcherSaga);

//     return store;
// };

// export const wrapper = createWrapper(makeStore, { debug: true })

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(
        applyMiddleware(...middlewares),
      );
    const store = createStore(RootReducer, enhancer);
    store.sagaTask = sagaMiddleware.run(RootSaga);
    return store;
  };
  
  const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });
  
  export default wrapper;