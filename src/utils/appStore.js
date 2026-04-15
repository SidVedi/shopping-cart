import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore(
    {
        // Different reducers from different slices
        reducer: {
            cart: cartReducer
        }
    }
);

export default appStore;