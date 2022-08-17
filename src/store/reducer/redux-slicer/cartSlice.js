import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  cartitem: [],
  cartquantity: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const itemindex = state.cartitem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemindex >= 0) {
        state.cartitem [itemindex].cartquantity += 1
      }
      else {
        const tempProduct = { ...action.payload, cartquantity: 1 };
        state.cartitem.push(tempProduct)
      }

    },
    
    remove(state, action) {
      const afterRemoving  = state.cartitem.filter(
        (cartitem) => cartitem.id !== action.payload.id)
        state.cartitem=afterRemoving
    },

  },
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;



