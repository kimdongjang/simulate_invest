export const PRICELIST_LOGIN = 'PriceListAction/LOGIN';
export const PRICELIST_LOGOUT = 'PriceListAction/LOGOUT';

export const priceListLogin = (ListenData:[], priceId:string) => ({ type: PRICELIST_LOGIN, payload: ListenData, priceId: priceId });
export const priceListLogout = (ListenData:[]) => ({ type: PRICELIST_LOGOUT, payload: ListenData });

export type PriceListAction = | ReturnType<typeof priceListLogin> | ReturnType<typeof priceListLogout>;