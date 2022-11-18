
import { configureStore } from "@reduxjs/toolkit";
import enteredSlice from "./modules/enteredSlice";
import todoReducer from "./modules/todoReducer";
import EnteredTodoReducer from "./modules/enteredTodoSlice"
export default configureStore({
    reducer:{
        entered: enteredSlice,
        todo: todoReducer,
        enteredTodo: EnteredTodoReducer
    }
});