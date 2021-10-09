import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem } from '../../components';
import { addToCart, removeFromCart } from '../../redux/actions/cartAction';
import './CartScreen.css';
interface CartScreenProps {

}

export const CartScreen: React.FC<CartScreenProps> = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state: RootStateOrAny) => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id: any, qty: any) => {
        dispatch(addToCart(id, qty))
    }

    const deleteCart = (id: any) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty: any, item: any) => Number(item.qty) + qty, 0)
    }

    const getCartTotalPrice = () => {
        return cartItems.reduce((price: any, item: any) => Number(item.price * item.qty) + price, 0)
    }
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {/* render cartitem */}
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/">Back to home</Link>
                    </div>
                ) : (
                    cartItems.map((item: any) => (
                        <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} deleteCart={deleteCart} />
                    ))
                )}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>$({getCartTotalPrice()})</p>
                </div>
                <div>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
}