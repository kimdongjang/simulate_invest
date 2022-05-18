import {UserAction, USER_LOGIN, USER_LOGOUT} from "../actions/UserAction"

export const initialState = {
    token: "",
};


export default function UserReducer(state = initialState, action: UserAction) {    
    console.log(action.payload)

    switch (action.type) {
        case USER_LOGIN:
            return {
                token:action.payload,
            };
        case USER_LOGOUT:
            return {
                token:action.payload,
            };
        default:
            return state;
    }
}
