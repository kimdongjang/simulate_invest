import { call, put, take, takeEvery } from 'redux-saga/effects';
import ws from './socket';
import { closeChannel, createSocketChannel } from './createSocketChannel';
import { actions, types } from './actions/SocketAction';

function* waitTask() {
    let channel;
    try {
        channel = yield call(createSocketChannel, "tasks");
        while (true) {
            const task = yield take(channel);
            yield onTask(task);
        }
    } catch (e) {
        console.log(e, "error");
    } finally {
        ws.current.onclose();
        closeChannel(channel);
    }
}

function* onTask(task) {
    yield put(actions.pushTask(task));
}

export default function* watcher() {
    yield takeEvery(types.WAIT_TASK, waitTask);
}