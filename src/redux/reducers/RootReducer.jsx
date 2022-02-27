import { combineReducers } from "redux";
import GetReducer from './GetReducer';
import SocketReducer from './SocketReducer';
import PostReducer from './PostReducer';
import UserReducer from "./UserReducer";


const RootReducer = combineReducers({
    PostReducer,
    GetReducer,
    SocketReducer,
    UserReducer,
});
 
export default RootReducer;