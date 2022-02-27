export const SOCKET_START = 'SocketAction/SOCKET_START';
export const SOCKET_POST = 'SocketAction/SOCKET_POST';

export const socketStart = () => ({ type: SOCKET_START });
export const socketPost = ListenData => ({ type: SOCKET_POST, data: ListenData });

export const initialState = {
    ListenData: [],
    timeLabels: []
};
