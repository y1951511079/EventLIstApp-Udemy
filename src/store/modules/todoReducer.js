
import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name: "todo",
    initialState: [],
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
        },
        edited(state,{type,payload}){
          //typeを省略しないと上手くpayload読み込めた
         const {newItem, num} = payload;
          // console.log(num)
          // console.log(newItem)
          const bState = [...state]
          // console.log(bState)
          bState.splice(num,1,newItem)
          return bState
        }
    }
})
const { add, deletedList, edited } = todoReducer.actions;
export { add ,deletedList, edited }
export default todoReducer.reducer ;