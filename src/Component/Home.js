import { useEffect } from "react";
import './index.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { add } from "../store/reducer/redux-slicer/cartSlice";
import { fetchProducts } from "../store/reducer/ProductSlice";
import { STATUSES } from '../store/reducer/ProductSlice'
function Home() {
  const dispatch = useDispatch();
  const { DATA, status } = useSelector((state) => state.products);
  const { id } = useParams
  // const fetchdata = (() => {
  //   fetch("https://fakestoreapi.com/products").then((response) => response.json())
  //     .then((item) => setItem(item)
  //     )
  // })

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (status === STATUSES.LOADING) {
    return <h2>LOading...</h2>
  }

  if (status === STATUSES.ERROR) {
    return <h2>something went wrong</h2>
  }



  return (
    <>

      <div className=" upper_item  ">
        {DATA.map((items, id) =>
          <div className="card margin " key={id}   >

            <div key={id}>
              <img className="card-img-top" src={items.image} alt="Card image cap" height={"230px"} />
              <div className="card-body text-center " height={"230px"} width={"230px"}>
                <h5 className="card-title">{items.category}</h5>
                <p className="card-text">{(items.title)}...</p>
                <Link to='/about'   className="btn btn-primary" >BYE NOW
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>

  )
}

export default Home;