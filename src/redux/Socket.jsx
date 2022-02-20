import io from 'socket.io-client';

// 소켓 연결 객체
export default io("wss://ws.channels.honeycombpizza.link/ws/market/13",  {transports: [ 'websocket' ]});