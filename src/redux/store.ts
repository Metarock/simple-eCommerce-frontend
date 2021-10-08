import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


//reducers
import { cartReducer } from './reducers/cartReducer';
import { getProductsReducer, getproductDetailsReducer } from './reducers/productReducer';
const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getproductDetailsReducer
})

//middleware
//Allows us to do asynchronous request
const middleware = [thunk];

//store
export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)