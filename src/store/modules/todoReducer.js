
import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name: "todo",
    initialState: "",
    reducers:{
        add(state,{type,payload}){
           const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: payload,
            editing: false,
          }; 
          return [...state, newTodo]
        },
        deletedList(state,{payload}){
          const newState=[...state];
          const filteredState = newState.filter((todo)=>{
            return todo.id !== payload.id 
          }
           )
           return filteredState
        }
    }
})
const { add, deletedList } = todoReducer.actions;
export { add ,deletedList }
export default todoReducer.reducer ;