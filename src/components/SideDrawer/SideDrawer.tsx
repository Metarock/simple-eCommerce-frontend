import React from 'react'
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
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to='/cart'>
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidedrawer__cartbadge">0</span>
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