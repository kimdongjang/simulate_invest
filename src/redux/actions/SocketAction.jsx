// state.js
import SocketReducer from '../reducers/SocketReducer';
import moment from 'moment';

export const types = {
    WAIT_TASK: 'socket/WAIT_TASK',
    PUSH_TASK: 'socket/PUSH_TASK',
};

export const actions = {
    waitTask: () => ({
        type: types.WAIT_TASK,
    }),
    pushTask: (payload) => ({
        type: types.PUSH_TASK,
        payload,
    }),
};
export const INITIAL_STATE = {
    tasks: [],
};

const reducer = SocketReducer(INITIAL_STATE, {
    [types.PUSH_TASK]: (state, action) => {
        state.tasks.push({ ...action.payload, time: moment(new Date()).format("HH시 mm분 ss초") });
    },
});


export default reducer;