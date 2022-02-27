export const USER_LOGIN = 'UserAction/LOGIN';
export const USER_LOGOUT = 'UserAction/LOGOUT';

export const userLogin = token => ({ type: USER_LOGIN, token: token });
export const userLogout = token => ({ type: USER_LOGOUT, token: token });

export const initialState = {
    token: "",
};
