import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice'   //api
import cartReducer from './features/cartSlice' 
import favoriteReducer from './features/favoriteSlice' 

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        favorite: favoriteReducer
    }
})

export default store
