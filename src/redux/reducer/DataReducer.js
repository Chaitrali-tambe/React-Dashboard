import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk('data/fetchUserData', async () =>{


    // const response = await fetch('https://dummyjson.com/users');
    const response = await fetch('https://fakestoreapi.com/users');
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    console.log(data)

    
    return data;
    
});

const initialState = {
    loading: false,
    data: [],
    error: null

};

const dataUserSlice = createSlice({
    name: 'userdata',
    initialState:{
        loading:false,
        data: [],
        error: null
    },

    extraReducers: (builder) =>{
        builder
        .addCase(fetchUserData.pending, (state)=>{
            state.loading = true;
        }) 
        .addCase(fetchUserData.fulfilled, (state,action) =>{
            state.loading = false;
            state.data = action.payload;
            // state.error = action.error.message;
        })
        .addCase(fetchUserData.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch data';
        });
    }
})

export default dataUserSlice.reducer;