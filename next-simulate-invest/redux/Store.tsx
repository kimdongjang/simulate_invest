import { createStore, applyMiddleware, Store, Middleware, StoreEnhancer } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import RootReducer from './reducers';
import RootSaga from './saga/RootSaga';
import { createLogger } from 'redux-logger';


// 미들웨어 끼리 묶음
const bindMiddleware = (middlewares: Middleware[]): StoreEnhancer => {
  const logger = createLogger();

  // if (process.env.NODE_ENV !== "production") {
  //   const { composeWithDevTools } = require("redux-devtools-extension");
  //   return composeWithDevTools(
  //     applyMiddleware(...middlewares),
  //     applyMiddleware(logger)
  //   );
  // }
  // return compose(applyMiddleware(...middlewares), applyMiddleware(logger));

  const { composeWithDevTools } = require("redux-devtools-extension");
  return composeWithDevTools(
    applyMiddleware(...middlewares),
    applyMiddleware(logger)
  );
  // return compose(applyMiddleware(...middlewares), applyMiddleware(logger));
};

// Next Redux Wrapper 리듀서와 rootSaga를 묶음
export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(RootReducer, bindMiddleware([sagaMiddleware]));
  sagaMiddleware.run(RootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });



// export interface SagaStore extends Store {
//   sagaTask?: Task;
// }

// export const makeStore = (context: Context) => {
//   // 1: Create the middleware
//   const sagaMiddleware = createSagaMiddleware();

//   // 2: Add an extra parameter for applying middleware:
//   const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

//   // 3: Run your sagas on server
//   (store as SagaStore).sagaTask = sagaMiddleware.run(RootSaga);

//   // 4: now return the store:
//   return store;
// };

// export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });


// const configureStore = () => {
//   // 사가용 미들웨어 생성
//   const sagaMiddleware = createSagaMiddleware();
//   const middlewares = [sagaMiddleware];


//   // production일 경우 확인
//   const enhancer = process.env.NODE_ENV === 'production'
//     ? compose(applyMiddleware(...middlewares))
//     : composeWithDevTools(
//       applyMiddleware(...middlewares),
//     );
//   const store = createStore(RootReducer, enhancer);
//   store.sagaTask = sagaMiddleware.run(RootSaga);
//   return store;
// };

// const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

// export default wrapper;