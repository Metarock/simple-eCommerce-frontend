import { parse } from 'querystring';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useParams } from 'react-router';
import { addToCart } from '../../redux/actions/cartAction';
import { getProductDetails } from '../../redux/actions/productActions';
import './ProductScreen.css';


export const ProductScreen: React.FC<RouteComponentProps> = ({ history, match }: any) => {

    const dispatch = useDispatch();
    const { id }: any = useParams();
    const idParse = parse(id)
    // axios.get(process.env.REACT_APP_API_URL.concat(`/api/products/${match.params.id}`)).then((json) => {
    //     console.log('yes ,', json);
    // }).catch((err) => {
    //     console.log('err', err)
    // });

    const [qty, setQty] = useState(1);


    const productDetails = useSelector((state: RootStateOrAny) => state.getProductDetails)

    const { loading, error, productItem } = productDetails;

    console.log('product ', productItem);
    console.log('match ', idParse);
    useEffect(() => {
        if (!productItem) {
            dispatch(getProductDetails(match.params.id))
        }
        else if (productItem && (match.params as any).id !== productItem?._id) {
            console.log('not cool')
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, match, productItem]);


    const addToCartHandler = () => {
        dispatch(addToCart(productItem?._id, qty));
        history.push(`/cart`);
    };
    return (
        <div className="productscreen">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productscreen__left">
                        <div className="left__image">
                            <img
                                src={productItem?.imageUrl}
                                alt="product name"
                            />
                        </div>

                        <div className="left__info">
                            <p className="left__name">{productItem?.name}</p>
                            <p>Price: $ {productItem?.price}</p>
                            <p>Description: {productItem?.description}</p>
                        </div>
                    </div>
                    <div className="productscreen_right">
                        <div className="right__info">
                            <p>
                                Price: <span>$ {productItem?.price}</span>
                            </p>
                            <p>
                                Status:
                                <span>
                                    {productItem?.countInStock > 0 ? "In stock" : "Out of stock"}
                                </span>
                            </p>
                            <p>
                                Qty:
                                <select value={qty} onChange={(e) => setQty(parseInt(e.target.value))}>
                                    {[...Array(productItem?.countInStock).keys() as any].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>Add to cart</button>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div >
    );
}