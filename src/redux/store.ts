import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


//reducers
import { cartReducer } from './reducers/cartReducer';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducer';
const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
})

//middleware
//Allows us to do asynchronous request
const middleware = [thunk];

//check the cart value in our local storage
const cartFromLocalStorage = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

//persist the state
const INITIAL_STATE = {
    cart: {
        cartItems: cartFromLocalStorage
    }
}

//store
export const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)
