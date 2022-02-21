import { combineReducers } from "redux";
import GetReducer from './GetReducer';
import SocketReducer from './SocketReducer';
import PostReducer from './PostReducer';


const RootReducer = combineReducers({
    PostReducer,
    GetReducer,
    SocketReducer,
});
 
export default RootReducer;