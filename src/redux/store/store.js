import { configureStore } from '@reduxjs/toolkit'
//import rootReducer from '../reducer/rootReducer';
import UserSlice from '../reducer/UserSlice';
import ProductSlice from '../reducer/ProductSlice';

const store = configureStore({
    reducer: {
        users: UserSlice,
        product: ProductSlice,
    },
});
 
export default store;