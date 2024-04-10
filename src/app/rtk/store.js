import ProductSlice from "./ProductSlice";
import cartSlice from "./cartSlice";
import userSlice, { userFetching } from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer:{
        // "https://dummyjson.com/products"
        user:userSlice,
        product : ProductSlice,
        cart:cartSlice
    }
})
