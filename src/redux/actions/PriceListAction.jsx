export const PRICELIST_LOGIN = 'PriceListAction/LOGIN';
export const PRICELIST_LOGOUT = 'PriceListAction/LOGOUT';

export const priceListLogin = (ListenData, PriceId) => ({ type: PRICELIST_LOGIN, data: ListenData, PriceId: PriceId });
export const priceListLogout = ListenData => ({ type: PRICELIST_LOGOUT, data: ListenData });

export const initialState = {
    ListenData: "",
    PriceId: "",
};
