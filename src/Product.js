import React from 'react'

function Product(
    { id, title, image, price, rating }
) {
    return (
        <div className="Product">
            
                <p className="Product_title">{title}</p>
                <p>
                    <small>$</small>
                    {price}
                </p>
                <div className="Product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=> (
                        <span role="img" aria-label="star">&#11088;</span> 
                    ))           
                }

                </div>
                <div>
                    <img className="Product_a" src={image} alt="" />  
                </div>  
                <button>Add to Basket</button>        
        </div>
       
    );
}

export default Product;
