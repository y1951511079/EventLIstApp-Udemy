
import { configureStore } from "@reduxjs/toolkit";
import enteredSlice from "./modules/enteredSlice";
import todoReducer from "./modules/todoReducer";

export default configureStore({
    reducer:{
        entered: enteredSlice,
        todo: todoReducer
    }
});