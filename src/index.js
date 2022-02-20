import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import RootReducer from './redux/reducers/RootReducer';
import promise from 'redux-promise-middleware';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
	RootReducer,
	composeWithDevTools(
		applyMiddleware(promise, logger),
	),
);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
)