import {
    GET_USERS_PENDING,
    GET_USERS_FULFILLED,
    GET_USERS_REJECTED,
} from '../actions/GetAction';

const initialState = {
    loading: false,
    data: [],
    error: null,
};

export default function getApi(state = initialState, action) {
    // redux-thunk reducer 처리

    // redux-promise reducer 처리
    if (action.type === GET_USERS_PENDING) {
        return {
            ...state,
            laoding: true,
            error: null,
        };
    }
    if (action.type === GET_USERS_FULFILLED) {
        return {
            ...state,
            laoding: false,
            data: action.payload,
        };
    }
    if (action.type === GET_USERS_REJECTED) {
        return {
            ...state,
            laoding: false,
            error: action.payload,
        };
    }
    return state;
}