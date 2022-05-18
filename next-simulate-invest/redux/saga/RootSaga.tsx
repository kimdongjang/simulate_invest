import { all, fork } from "@redux-saga/core/effects";
import { watchLiveDataSaga, watchLoginDataSaga,watchPriceListDataSaga } from "./SocketSaga";


export default function* RootSaga() {
  yield all([fork(watchLiveDataSaga), fork(watchLoginDataSaga), fork(watchPriceListDataSaga) ]);
}