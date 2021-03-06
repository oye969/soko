import React from 'react';
import { useStateValue } from "../State/StateProvider";



function CheckoutProduct({id, title, image, price, rating}) {
    const [{ basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
        basket({
            type: "",
            id: id,
        });
    };


    return (
        <div className="checkoutProduct">
        
                <img className="checkoutProduct_img" src={image} alt="" />

            
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>

                <p className="checkoutProduct_price">
                    <small>$</small>
                    {price}
                </p>

                <div className="checkoutProduct_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=> (
                        <span role="img" aria-label="star">&#11088;</span> 
                    ))           
                }

                </div>
                    <button className="btn_checkout" onClick={removeFromBasket}>Remove from basket</button>  
                </div>
        </div>
    )
}

export default CheckoutProduct;
