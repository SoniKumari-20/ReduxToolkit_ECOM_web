import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { add } from "../store/reducer/redux-slicer/cartSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
function About() {
  const dispatch = useDispatch()
  const  id  = useParams()
  const products_slice= useSelector(state => state.products)
  const [data, setData] = useState([]);

  useEffect(() => {
    const product = products_slice.DATA.filter((e) => e.id === parseInt(id))
    setData(() => product)
  }, [id])


  
  return (
    <div >
      <h1>About Page</h1>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <img src={products_slice.DATA.image} alt="" height={"400px"} width="400px" />
          </div>
          <div className="col-md-6">
            <h4 className='text-uppercase text-black-50'> {products_slice.DATA.category}</h4>
            <h1 className='display-5'> {products_slice.DATA.title}</h1>
            <p className='lead fw-bolder'> Rating {products_slice.DATA.rating && products_slice.DATA.rating.rate} <i className='fa fa-star'></i></p>
            <h3 className='display-6 fw-bold my-4'> $ {products_slice.DATA.price}</h3>
            <p className="lead">{products_slice.DATA.description}</p>
            <Link to="/home" className='btn btn-dark mx-3'><i className="fa-solid fa-arrow-left-long"></i> GO TO HOME</Link>
            <button onClick={() => dispatch(add({ id: id }))} className='btn btn-outline-dark'> <i className="fa-solid fa-cart-arrow-down"></i> ADD TO CART</button>
            <Link to="/cart" className='btn btn-dark mx-3'> GO TO CART <i className="fa-solid fa-arrow-right-long"></i></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;