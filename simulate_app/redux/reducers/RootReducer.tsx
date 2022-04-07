import { combineReducers } from "redux";
import GetReducer from './GetReducer';
import SocketReducer from './SocketReducer';
import PostReducer from './PostReducer';
import UserReducer from "./UserReducer";
import { cryptoApi, cryptoCompareHistoryApi, cryptoHistoryApi } from "../../services/cryptoApi";


const RootReducer = combineReducers({
    PostReducer,
    GetReducer,
    SocketReducer,
    UserReducer,  
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoHistoryApi.reducerPath]: cryptoHistoryApi.reducer,
    [cryptoCompareHistoryApi.reducerPath]: cryptoCompareHistoryApi.reducer,
});
 
export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;