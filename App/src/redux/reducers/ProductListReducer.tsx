import {PRICELIST_LOGIN,PRICELIST_LOGOUT,PriceListAction} from "../actions/PriceListAction"


export const initialState = {
    ListenData: [],
    PriceId: "",
};


export default function PriceListReducer(state = initialState, action:PriceListAction) {    
    switch (action.type) {
        case PRICELIST_LOGIN:
            return {
                ...state,
                ListenData: [...state.ListenData, action.payload],
                PriceId: action.payload,
            };
        case PRICELIST_LOGOUT:
            return{
                ListenData: action.payload
            }
    }
}
