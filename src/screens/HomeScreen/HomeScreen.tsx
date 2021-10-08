import React, { useState, useEffect } from 'react'
import { Product } from '../../components';
import './HomeScreen.css'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { getProducts as listProducts } from '../../redux/actions/productActions';
interface HomeScreenProps {

}

export const HomeScreen: React.FC<HomeScreenProps> = () => {

    const dispatch = useDispatch();
    //get producst data
    const getProducts = useSelector((state: RootStateOrAny) => state.getProducts);

    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
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