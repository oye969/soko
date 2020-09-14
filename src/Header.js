import React from 'react'
import { Link } from 'react-router-dom';




function Header() {
    return <nav className="Header">
        <Link to="/">
            <img className="Img_Logo" src="./logo.png" alt="logo"/>
        </Link>
            <h1 className="Header_Text">SOKO ...all African and Carribean</h1>
        
    
    </nav>
 
 
}

export default Header;