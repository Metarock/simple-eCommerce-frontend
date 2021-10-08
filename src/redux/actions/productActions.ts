import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch: any) => {
    try {
        dispatch({
            type: actionTypes.GET_PRODUCTS_REQUEST
        });

        const { data }: any = await axios.get(process.env.REACT_APP_API_URL.concat('/api/products'));

        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (err: any) {
        //if there is an error
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload:
                err.response
                    && err.response.data.message
                    ? err.response.data.message
                    : err.message
        })
    }
}


export const getProductDetails = (id: any) => async (dispatch: any) => {
    try {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_REQUEST
        });

        const { data }: any = await axios.get(process.env.REACT_APP_API_URL.concat(`/api/products/${id}`));

        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (err: any) {
        //if there is an error
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload:
                err.response
                    && err.response.data.message
                    ? err.response.data.message
                    : err.message
        })
    }
}


export const removeProductDetails = () => (dispatch: any) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET
    })
}