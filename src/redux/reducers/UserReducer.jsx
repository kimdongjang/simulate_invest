import {USER_LOGIN, USER_LOGOUT, initialState} from "../actions/UserAction"


export default function UserReducer(state = initialState, action) {    
    console.log(action.token)
    switch (action.type) {
        case USER_LOGIN:
            return {
                token:action.token,
            };
        case USER_LOGOUT:
            return {
                token:action.token,
            };
        default:
            return state;
    }
}
