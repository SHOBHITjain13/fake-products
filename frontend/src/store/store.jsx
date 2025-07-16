import { configureStore} from "@reduxjs/toolkit"
import cartSlice from "../store/reducers/cartSlice";
import userSlice from "../store/reducers/userSlice";
import productSlice from "../store/reducers/productSlice";


export const store = configureStore({
    reducer: {
        usersReducer: userSlice,
        productReducer: productSlice,
        cartReducer: cartSlice,
    },
})