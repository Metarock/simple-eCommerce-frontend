import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux';
import { Link } from 'react-router-dom';
import './SideDrawer.css'

interface SideDrawerProps {
    show: boolean,
    click: React.MouseEventHandler<HTMLUListElement>
}

export const SideDrawer: React.FC<SideDrawerProps> = ({ show, click }) => {

    const sideDrawerClass = ['sidedrawer'];

    //if show is true
    if (show) {
        sideDrawerClass.push("show");
    }

    const cart = useSelector((state: RootStateOrAny) => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty: any, item: any) => Number(item.qty) + qty, 0)
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to='/cart'>
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidedrawer__cartbadge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    );
}