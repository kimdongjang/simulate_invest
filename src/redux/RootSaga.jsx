import { all, fork } from "redux-saga/effects";
import { createConnectSocketSaga } from "./SocketSaga"

export default function* RootSaga() {
  yield all([
    fork(createConnectSocketSaga),
  ]);
}