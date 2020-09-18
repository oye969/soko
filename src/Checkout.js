import React from 'react';
import { useStateValue } from './StateProvider';


function Checkout() {
    const [{ basket }, dispatch] = useStateValue();    


    return (
        <div className="checkout">
            <h1 className="checkout_h">Checkout</h1>
            
        </div>
    )
}

export default Checkout
