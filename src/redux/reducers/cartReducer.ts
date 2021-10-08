import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] } as any, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const existItem = state.cartItems.find((x: any) => x.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x: any) => x.product === existItem.product ? item : x) //set a new array
                }
            } else {
                //first time added to the cart
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x: any) => x.product !== action.payload)
            }
        default:
            return state;
    }
}