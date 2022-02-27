import {SOCKET_POST, initialState} from "../actions/SocketAction"


export default function SocketReducer(state = initialState, action) {    
    switch (action.type) {
        case SOCKET_POST:
            return {
                ...state,
                ListenData: [...state.ListenData, action.ListenData],
                timeLabels: [...state.timeLabels, new Date().toLocaleTimeString()]
            };
        default:
            return state;
    }
}
