import React, { useState } from 'react'
import { Product } from '../../components';
import './HomeScreen.css'
interface HomeScreenProps {

}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
    return (
        <div className="homescreen">
            <h2 className="homescrreen__title">Latest Products</h2>
            <div className="homescreen__products">
                {/* render the Product component here */}
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}