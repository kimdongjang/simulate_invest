import { SOCKET_POST, SOCKET_START } from "../actions/SocketAction"
import { SocketState, SocketAction } from "../types/SocketType";


export const initialState: SocketState = {
    ListenData: [],
    timeLabels: []
};

export default function SocketReducer(state:SocketState = initialState, action: SocketAction) {    
    switch (action.type) {
        case SOCKET_POST:
            return {
                ...state,
                ListenData: [...state.ListenData, action.payload],
                timeLabels: [...state.timeLabels, new Date().toLocaleTimeString()]               
            };
        default:
            return state;
    }
}
