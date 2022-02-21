// src/redux/reducers/reducers.js
import * as type from '../types/SocketType';

const chatStates = {
    chatList: [],
    socketId: null
};

/**
 * {...state, ...newState} == Object.assign(state, { newState })
...state를 앞에 쓰는 것이 이전의 state값을 복제한 후 state를 변화시키는 것
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const SocketReducer = (state = chatStates, action) => {
    switch (action.type) {
        case type.MY_SOCKET_ID:
            return { ...state, socketId: action.socketId };
        case type.RECEIVE_CHAT:
            let newChatList = state.chatList.slice();
            newChatList.push(action.data);
            return { ...state, chatList: newChatList };
        case type.CLEAR_CHAT:
            return { ...state, chatList: [] }
        default:
            return state;
    }
}


export default SocketReducer;