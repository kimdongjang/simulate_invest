import {PRICELIST_LOGIN,PRICELIST_LOGOUT , initialState} from "../actions/PriceListAction"


export default function PriceListReducer(state = initialState, action) {    
    switch (action.type) {
        case PRICELIST_LOGIN:
            return {
                ...state,
                ListenData: [...state.ListenData, action.ListenData],
                PriceId: action.PriceId,
            };
        case PRICELIST_LOGOUT:
            return{
                ListenData: action.ListenData
            }
    }
}
