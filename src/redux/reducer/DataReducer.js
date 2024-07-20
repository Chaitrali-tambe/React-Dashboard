import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('data/fetchUsers', async () =>{
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json()
    return data;

});

const initialState = {
    loading: false,
    data: [],
    error: null

};

const dataUserSlice = createSlice({
    name: 'userdata',

})
