import React, { useState } from 'react'
import './CartScreen.css'
import { CartItem } from '../../components';

interface CartScreenProps {

}

export const CartScreen: React.FC<CartScreenProps> = ({ }) => {
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {/* render cartitem */}
                <CartItem />
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