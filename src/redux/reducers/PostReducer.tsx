import {
    POST_REQUEST_PENDING,
    POST_REQUEST_FULFILLED,
    POST_REQUEST_REJECTED,
} from '../actions/PostAction';

const initialState = {
    loading: false,
    data: {},
    error: null,
};

export default function postApi(state = initialState, action) {
    // redux-thunk reducer 처리

    // redux-promise reducer 처리
    if (action.type === POST_REQUEST_PENDING) {
        return {
            ...state,
            laoding: true,
            error: null,
        };
    }
    if (action.type === POST_REQUEST_FULFILLED) {
        return {
            ...state,
            laoding: false,
            data: action.payload,
        };
    }
    if (action.type === POST_REQUEST_REJECTED) {
        return {
            ...state,
            laoding: false,
            error: action.payload,
        };
    }
    return state;
}