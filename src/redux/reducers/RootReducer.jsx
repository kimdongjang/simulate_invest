import { combineReducers } from "redux";
import GetReducer from './GetReducer';
import SocketReducer from './SocketReducer';


const RootReducer = combineReducers({
    GetReducer,
    SocketReducer,
});
 
export default RootReducer;