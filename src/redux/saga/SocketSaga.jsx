import { eventChannel } from "redux-saga";
import { call, put, take, takeEvery } from "@redux-saga/core/effects";

function initWebsocket() {    
    return eventChannel((emitter) => {
        let ws = new WebSocket("ws://ws.channels.honeycombpizza.link/ws/notify/");

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
        let user_ws = new WebSocket("ws://ws.channels.honeycombpizza.link/ws/personal/" + token + "/");
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

function* wsSaga() {
    const channel = yield call(initWebsocket);    
    while (true) {
        const action = yield take(channel);
        yield put(action);
    }
}

function* wsLoginChannel(action) {
    console.log(action)

    const loginChannel = yield call(initUserWebsocket, action);  
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