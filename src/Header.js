import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";




function Header() {
    return (
    <nav className="Header">
        <Link to="/">
            <img className="Img_Logo" src="./logo.png" alt="logo"/>
        </Link>
            <h1 className="Header_Text">SOKO</h1><h2>...all African and Carribean</h2>
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

        </div>
    
    </nav>
 
    );
}

export default Header;
