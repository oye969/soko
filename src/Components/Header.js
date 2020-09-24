import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../State/StateProvider';



function Header() {
    const [{ basket }] = useStateValue(); 


    return (
       
    <nav className="Header">
        <Link to="/">
            <img className="Img_Logo" src="./img/logo.png" alt="logo"/>
        </Link>
            <h1 className="Header_Text">SOKO</h1><h4>...all African and Caribbean</h4>
            <input type="text" className="Header_Input"/>
        <div>
            <SearchIcon className="Header_Search" />
        </div>

        <div className="Header_more">
            <Link to="/login" className="Header_Login">
                <div>
                    <span>Sign In</span>
                </div>   
            </Link>

            <Link to="/Coupons" className="Header_Coupons">
                <div>
                    <span>Coupons</span>
                </div>   
            </Link>

            <Link to="/Track" className="Header_Track">
                <div>
                    <span>Track Order</span>
                </div>   
            </Link>

            <Link to="/Checkout" className="Header_Checkout">
                <div className="Header_CheckoutDiv">
                    <ShoppingBasketIcon />
                </div>   
            </Link>
                <div className="Counter">{basket?.length}</div>
        </div>
    
    </nav>

    );
}

export default Header;
