import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Product } from '../../components';
import { getProducts as listProducts } from '../../redux/actions/productActions';
import './HomeScreen.css';
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
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map((product: any) => (
                    <Product
                        key={product._id}
                        productId={product._id}
                        {...product} />
                ))}
            </div>
        </div>
    );
}