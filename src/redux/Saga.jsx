import { call, put, take, takeEvery } from 'redux-saga/effects';
import Socket from './Socket';
import { closeChannel, CreateSocketChannel } from './CreateSocketChannel';
import { actions, types } from './state';

function* waitTask() {
    let channel;
    try {
        channel = yield call(CreateSocketChannel, "tasks");
        while (true) {
            const task = yield take(channel);
            yield onTask(task);
        }
    } catch (e) {
        console.log(e, "error");
    } finally {
        Socket.close();
        closeChannel(channel);
    }
}

function* onTask(task) {
    yield put(actions.pushTask(task));
}

export default function* watcher() {
    yield takeEvery(types.WAIT_TASK, waitTask);
}