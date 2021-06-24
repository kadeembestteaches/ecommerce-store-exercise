import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1> <Link to="/">E-Commerce Checkout</Link></h1> 
            <Link to="/products" className="btn" >Add Product</Link> 
            <Link to="/about-us" className="btn" >About Us Page</Link>
      </header>
    )
}

export default Header
