import React from 'react'
import { useStateValue } from '../State/StateProvider';




function Product({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    
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
                <button onClick={addToBasket}>Add to Basket</button>        
        </div>
       
    );
}

export default Product;
