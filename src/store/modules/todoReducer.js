
import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name: "todo",
    initialState: "",
    reducers:{
        add(state,{type,payload}){
           const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: payload,
            editing: false
          }; 
          return [...state, newTodo]
        }
    }
})
const { add } = todoReducer.actions;
export { add }
export default todoReducer.reducer ;