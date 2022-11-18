
import { createSlice } from "@reduxjs/toolkit";

const enteredTodoReducer = createSlice({
    
    name: "enteredTodo",
    initialState:"",
    reducers: {
        enteredTodo:(state, { type, payload })=> {
            console.log(payload)
            return state=payload
        },
       
    },
})

const { enteredTodo} = enteredTodoReducer.actions;
export { enteredTodo }
export default enteredTodoReducer.reducer;

