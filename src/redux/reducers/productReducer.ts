import * as actionTypes from '../constants/productConstants';



// Get all of the state that we will receive from the backend

export const getProductsReducer = (state = { products: [] } as any, action: any) => {
    switch (action.type) {
        //able to make a request but not receiving any products
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [] as any
            }
        //request sent and receiving products
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

/**
 * View product
 */
export const getproductDetailsReducer = (state = { products: {} } as any, action: any) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                product: {}
            }
        default:
            return state;
    }
}