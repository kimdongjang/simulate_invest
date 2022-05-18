export const USER_LOGIN = 'UserAction/LOGIN' as const;
export const USER_LOGOUT = 'UserAction/LOGOUT' as const;

export const userLogin = (token:string) => ({ type: USER_LOGIN, payload: token });
export const userLogout = (token:string) => ({ type: USER_LOGOUT, payload: token });

export type UserAction = | ReturnType<typeof userLogin> | ReturnType<typeof userLogout>;