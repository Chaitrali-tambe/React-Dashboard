import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProductData = createAsyncThunk('data/fetchProductData', async () =>{
    
    const response = await fetch('https://fakestoreapi.com/products');
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("DATA SLICE ", data)
    return data;
    
});



const productSlice = createSlice({
    name: 'productdata',
    initialState:{
        loading:false,
        data: [],
        error: null
    },

    extraReducers: (builder) =>{
        builder
        .addCase(fetchProductData.pending, (state)=>{
            state.loading = true;
        }) 
        .addCase(fetchProductData.fulfilled, (state,action) =>{
            state.loading = false;
            state.data = action.payload;
            // state.error = action.error.message;
        })
        .addCase(fetchProductData.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch data';
        });
    }
})


export default productSlice.reducer;