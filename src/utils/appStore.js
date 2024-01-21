import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";



const appStore = configureStore({

    reducer: {
        cart: cartReducer,
    }


});

export default appStore;


/**
 * reducer: {
        cart: cartReducer,
    }

    this outer reducer is big reducer for our whole app and it contains different small reducers from different slices. Each slice has it's own reducer { like cart has cartReducer, let suppose if we had users data so we would have written user: userReducer }.

    That is all we have to do.
 * 
 * 
 */