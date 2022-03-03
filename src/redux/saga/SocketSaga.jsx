import { eventChannel } from "redux-saga";
import { call, put, take, takeEvery } from "@redux-saga/core/effects";

function initWebsocket() {    
    return eventChannel((emitter) => {        
        let ws = new WebSocket("wss://ws.channels.honeycombpizza.link/ws/notify/");

        console.log("ws", ws);

        ws.onopen = () => {
            console.log("Opening Websocket");
            // ws.send(JSON.stringify(subscribe));
        };        

        ws.onerror = (error) => {
            console.log("ws ERROR: ", error);
            console.dir(error);
        };        

        ws.onmessage = (e) => {
            let value = null;
            console.log(e)
            try {
                value = JSON.parse(e.data);
            } catch (e) {
                console.error(`Error Parsing Data: ${e.data}`);
            }
            emitter({
                type: "SocketAction/SOCKET_POST",
                ListenData: value
            });
        };

        return () => {
            ws.close();
        };
    });
}

function initUserWebsocket(action){
    return eventChannel((emitter) => {
        console.log(action.token)
        let token = btoa(action.token)
        let user_ws = new WebSocket("wss://ws.channels.honeycombpizza.link/ws/personal/" + token + "/");
        console.log("user_ws", user_ws);
        
        
        user_ws.onopen = () => {
            console.log("Opening User Websocket");
            // ws.send(JSON.stringify(subscribe));
        };

        user_ws.onerror = (error) => {
            console.log("ws ERROR: ", error);
            console.dir(error);
        };
        
        user_ws.onmessage = (e) => {
            let value = null;
            console.log(e)
            try {
                value = JSON.parse(e.data);
            } catch (e) {
                console.error(`Error Parsing Data: ${e.data}`);
            }
            
            emitter({
                type: "UserAction/LOGIN_LISTEN",
                ListenData: value
            });
        }

        return () => {
            user_ws.close();
        };
    });
}

function initPriceListWebsocket(action){
    return eventChannel((emitter) => {
        console.log(action.PriceId)
        // let token = btoa(action.token)
        let priceList_ws = new WebSocket("wss://ws.channels.honeycombpizza.link/ws/price/" + action.PriceId + "/");
        console.log("priceList_ws", priceList_ws);
        
        
        priceList_ws.onopen = () => {
            console.log("Opening PriceList Websocket");
            // ws.send(JSON.stringify(subscribe));
        };

        priceList_ws.onerror = (error) => {
            console.log("ws ERROR: ", error);
            console.dir(error);
        };
        
        priceList_ws.onmessage = (e) => {
            let value = null;
            console.log(e)
            try {
                value = JSON.parse(e.data);
            } catch (e) {
                console.error(`Error Parsing Data: ${e.data}`);
            }
            
            // emitter({
            //     type: "UserAction/LOGIN_LISTEN",
            //     ListenData: value
            // });
        }

        return () => {
            priceList_ws.close();
        };
    });
}

function* wsSaga() {
    const channel = yield call(initWebsocket);    
    while (true) {
        const action = yield take(channel);
        yield put(action);
    }
}

function* wsLoginChannel(action) {
    const loginChannel = yield call(initUserWebsocket, action);  
    while (true) {        
        const action = yield take(loginChannel);
        yield put(action);
    }
}
function* wsPriceListChannel(action) {
    const loginChannel = yield call(initPriceListWebsocket, action);  
    while (true) {        
        const action = yield take(loginChannel);
        yield put(action);
    }
}

export function* watchLiveDataSaga() {
    yield takeEvery("SocketAction/SOCKET_START", wsSaga);
}
export function* watchLoginDataSaga(){
    yield takeEvery("UserAction/LOGIN", wsLoginChannel);
}
export function* watchPriceListDataSaga(){
    yield takeEvery("PriceListAction/LOGIN", wsPriceListChannel);
}