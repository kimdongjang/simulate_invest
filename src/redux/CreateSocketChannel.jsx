// CreateSocketChannel.js
import {eventChannel, buffers} from 'redux-saga';
import Socket from './Socket';

// 기본 matcher, buffer
const defaultMatchers = () => true; 
const defalutBuffer = buffers.none();

// 소켓 이벤트채널 생성 팩토리함수
export function CreateSocketChannel(eventType, buffer = defalutBuffer, matchers = defaultMatchers) {
    return eventChannel(
        emit => {
            const emitter = (message) => {
                emit(message);
            };
            Socket.on(eventType, emitter);
            // 항상 unsubscribe 함수를 반환해야한다.소스코드가 종료되기전에 socket.off 시키고있다
            // .
            return () => {
                Socket.off(eventType, emitter);
            }
        },
        buffer,
        matchers,
    )
}

export function closeChannel(channel) {
    if (channel) {
      channel.close();
    }
}