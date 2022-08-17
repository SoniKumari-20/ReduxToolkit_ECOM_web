import React from "react";
import './index.css'
import { Cartcard } from "./Cartcard";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux/es/exports";
export function Cart() {
  const cartProducts = useSelector(state => state.cart)

  console.log(cartProducts)


  return (
    <>
      <div className=" my-4">
        <h1>CART ITEMS</h1>
        {
          cartProducts.cartitem.length === 0 ? (
            <div className="containers">
              <h4 style={{ color: "rgba(232, 28, 152,255)" }}>Your cart is empty</h4>
              <div className=" sec">
                <Link to='/home'>
                  <div className="home_arrow">
                    <i className="fa-solid fa-arrow-left-long"></i>
                    <span id="go_From">
                      Go To Home
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ) : (<div>
            <Cartcard />
          </div>
          )}
      </div>
    </>
  )
}