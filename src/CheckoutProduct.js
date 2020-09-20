import React from 'react';


function CheckoutProduct({id, title, image, price, rating}) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />

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
                <button>Remove from Basket</button>  
            </div>
        </div>
    )
}

export default CheckoutProduct;
