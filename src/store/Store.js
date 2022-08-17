import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/redux-slicer/cartSlice";
import productReducer from './reducer/ProductSlice'
const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
    },
});

export default store;