import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { remove } from '../store/reducer/redux-slicer/cartSlice';
export function Cartcard()  {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart)

    const handleRemovecart = (cartitems) => {
        dispatch(remove(cartitems))
    }
    return (
        <div>
            {cartProducts.cartitem.map((cartitems) =>
                <div className="container">
                    <div className=" item_image">
                        <img className="card-img-top" src={cartitems.image} alt="Card image cap" height={"230px"} />
                    </div>
                    <div className="item_information">
                        <h4 className="item_category">{cartitems.category}</h4>
                        <h6>{cartitems.description.substr(0, 100)}...</h6>
                        <div className="i">{cartitems.price}</div>
                        <div className="item">
                            <buttton className="btn btn-danger" onClick={() => handleRemovecart(cartitems)} >Remove </buttton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
