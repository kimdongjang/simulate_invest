import { call, put, select, flush, delay } from "redux-saga/effects";
import { createSocket } from './Socket';
import { connectSocket } from './CreateSocketChannel';
import { buffers } from 'redux-saga';

export const createConnectSocketSaga = (type, connectType, dataMaker) => {
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    return function* (action = {}) {
        const client = yield call(createSocket);
        const clientChannel = yield call(
            connectSocket,
            client,
            connectType,
            action,
            buffers.expanding(500)
        );

        while (true) {
            try {
                const datas = yield flush(clientChannel); // 버퍼 데이터 가져오기
                const state = yield select();

                if (datas.length) {
                    const sortedObj = {};
                    datas.forEach((data) => {
                        if (sortedObj[data.code]) {
                            // 버퍼에 있는 데이터중 시간이 가장 최근인 데이터만 남김
                            sortedObj[data.code] =
                                sortedObj[data.code].timestamp > data.timestamp
                                    ? sortedObj[data.code]
                                    : data;
                        } else {
                            sortedObj[data.code] = data; // 새로운 데이터면 그냥 넣음
                        }
                    });

                    const sortedData = Object.keys(sortedObj).map(
                        (data) => sortedObj[data]
                    );

                    yield put({ type: SUCCESS, payload: dataMaker(sortedData, state) });
                }
                yield delay(500); // 500ms 동안 대기
            } catch (e) {
                yield put({ type: ERROR, payload: e });
            }
        }
    };
};