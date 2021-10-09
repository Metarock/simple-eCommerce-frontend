import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

//make http request from our backend

/**
 * This is a api request to add cart to a specific item
 * @param id id of the cartItem
 * @param qty amount of the item 
 * @returns 
 */
export const addToCart = (id: any, qty: any) => async (dispatch: any, getState: any) => {
    const { data }: any = await axios.get(process.env.REACT_APP_API_URL.concat(`/api/products/${id}`));

    //this is basically saying get the data from the backend with the variable
    //and then save the payload
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    //getState is a redux thunk
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

/**
 * Remove items from the cart
 * @param id 
 * @returns 
 */
export const removeFromCart = (id: any) => (dispatch: any, getState: any) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}