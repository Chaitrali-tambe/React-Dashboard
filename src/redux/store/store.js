import { configureStore } from '@reduxjs/toolkit'
import DataReducer from '../reducer/DataReducer'

const store = configureStore({
    reducer:{
        data: DataReducer,
    }
});
 
export default store;