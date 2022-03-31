import { ActionType } from "typesafe-actions";

import * as socketActions from "../actions/SocketAction";

export type SocketState = {
    ListenData: [],
    timeLabels: []
}

export type SocketAction = ActionType<typeof socketActions>;