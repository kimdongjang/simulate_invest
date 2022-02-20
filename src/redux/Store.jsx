import { applyMiddleware, createStore } from 'redux';
import RootReducer from './reducers/RootReducer';
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';


const store = createStore(
    RootReducer,
    composeWithDevTools(
        applyMiddleware(promise, logger),
    ),
);

export default store;