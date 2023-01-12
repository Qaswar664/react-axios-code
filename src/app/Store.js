import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../reducers/Cart";

export const store=configureStore({
    reducer:{
        cart:cartSlice,
    }
})