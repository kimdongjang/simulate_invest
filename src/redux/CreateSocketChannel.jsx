// CreateSocketChannel.js
import { eventChannel, buffers } from 'redux-saga';

// 소켓 연결용
export const connectSocket = (socket, connectType, action, buffer) => {
    return eventChannel((emit) => {
        socket.onopen = () => {
            socket.send(
                JSON.stringify([
                    { ticket: "downbit-clone" },
                    { type: connectType, codes: action.payload },
                ])
            );
        };

        socket.onmessage = (evt) => {
            const enc = new TextDecoder("utf-8");
            const arr = new Uint8Array(evt.data);
            const data = JSON.parse(enc.decode(arr));

            emit(data);
        };

        socket.onerror = (evt) => {
            emit(evt);
        };

        const unsubscribe = () => {
            socket.close();
        };

        return unsubscribe;
    }, buffer || buffers.none());
};
