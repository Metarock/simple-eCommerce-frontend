import React, { useState, useEffect } from 'react'
import './CartScreen.css'
import { CartItem } from '../../components';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartAction';
interface CartScreenProps {

}

export const CartScreen: React.FC<CartScreenProps> = ({ }) => {
    const dispatch = useDispatch();

    const cart = useSelector((state: RootStateOrAny) => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id: any, qty: any) => {
        dispatch(addToCart(id, qty))
    }

    const deleteCart = (id: any) => {
        dispatch(removeFromCart(id));
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
                        <CartItem item={item} qtyChangeHandler={qtyChangeHandler} deleteCart={deleteCart} />
                    ))
                )}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal (0) items</p>
                    <p>$499</p>
                </div>
                <div>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
}