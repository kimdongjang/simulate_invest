import { createStore, applyMiddleware, Store } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import reducer, { State } from './reducer';
import rootSaga from './saga';


export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });


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