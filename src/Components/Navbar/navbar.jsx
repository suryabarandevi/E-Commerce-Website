import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/shopcontext";
const Navbar=()=>{
    const [menu,setmenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext)
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} style={{ width: '50px', height: '50px' }} alt="" />
                <p>Pohs</p>
            </div>
            <ul className="nav-menu">
                {/* link is used from react router dom */}
                <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/' >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("men")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                {/* <li>Shop  <hr /></li>
                <li>Kids</li>
                <li>Women</li>
                <li>Men</li> */}
               
               
            </ul>
            <div className="nav-login-cart">
                <button><Link to='/login' style={{textDecoration: 'none'}}>Login</Link></button>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
export default Navbar