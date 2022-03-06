export const SOCKET_START = 'SocketAction/SOCKET_START' as const;
export const SOCKET_POST = 'SocketAction/SOCKET_POST' as const;

export const socketStart = () => ({ type: SOCKET_START });
export const socketPost = (ListenData:[]) => ({ type: SOCKET_POST, payload: ListenData });


export type SocketAction = | ReturnType<typeof socketStart> | ReturnType<typeof socketPost>;