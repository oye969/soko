import React from 'react'

function Product(
    { id, title, image, price, rating }
) {
    return (
        <div className="Product">
            <p className="Product_title">{title}</p>
            <p>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="Product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=> (
                        <p>&#11088;</p>
                    )
                    )           
                }

            </div>
            
        </div>
    )
}

export default Product;
