import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})

const initialState = {
    DATA: [],
    status: STATUSES.IDLE,
    
} 


const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending, (state, action)=>{
            state.status = STATUSES.LOADING;

        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.DATA = action.payload
        state.status= STATUSES.IDLE
           })
           .addCase(fetchProducts.rejected, (state, action)=>{
            state.status= STATUSES.ERROR
           })
    }
}
);
export const{setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts= createAsyncThunk('products/fetch', async()=>{
    const res= await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
}
)

// export function fetchProducts(){
//     return async function fetchProductThunk(dispatch, getState){
//         dispatch(setStatus(STATUSES.LOADING));
//         try{
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(console.log(data))
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         }catch(err){
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }
