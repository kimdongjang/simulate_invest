import { combineReducers } from 'redux';
import Products from './ApiModule'
// import counter from './counterModule'
// import todo from './todoModule'

const rootReducer = combineReducers(
    {
        Products,
        // todo
    }
);

export default rootReducer;