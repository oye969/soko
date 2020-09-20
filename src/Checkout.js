import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{ basket }, dispatch] = useStateValue();    


    return (
        <div className="checkout">
            <h1 className="checkout_h">Checkout</h1>
            {basket?.length === 0 ? (
                <div>
                    <h1 className="checkout_e">Your Shopping Basket is empty.</h1>
                    <h1 className="checkout_f">You have no item(s) in your basket.</h1>
                </div>
            ): (
                <div>
                   <h1 className="checkout_b">Your Shopping Basket</h1> 

                   {basket.map(item => (
                      <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                      /> 
                   ))}
                </div>
            )}
            
        </div>
    )
}

export default Checkout;
