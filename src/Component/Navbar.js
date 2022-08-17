import React from "react";
import './index.css'
import { useSelector } from "react-redux/es/exports";
import {Link} from 'react-router-dom'
function Navbar(){
const cart_length = useSelector((state) => state.cart)

  return(
    <>
<nav className="navbar navbar-expand-lg navbar-white  "  style={{background: "linear-gradient(to right, rgba(3, 3, 3, 0.83), purple, rgba(3, 3, 3, 0.83), purple, rgba(3, 3, 3, 0.83) )"}} >
        <a className="navbar-brand text-white" >Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link text-white" ><Link to="/home">Home</Link><span className="sr-only">(current)</span></a>
            </li>
            
        <li className="nav-item">
        <a className="nav-link text"><Link to="/About"></Link></a>
      </li>
         </ul>   
       </div>
       <div >
        <Link to="/cart" >
        <i class="fas fa-shopping-cart">
        <span className="cart_length">
        {cart_length.cartitem.length}
        
        </span>
        </i>

        </Link>
       </div>
      </nav>
    </>)
}
export default Navbar;