
import { createSlice } from "@reduxjs/toolkit";

const enteredSlice = createSlice({
    name: "entered",
    initialState: "",
    reducers: {
        entered:(state, { type, payload })=> {
            return state = payload
        },
        deleteda:(state)=> state=""
        //deleteは予約語で使えなかった
    },
})
const { entered, deleteda} = enteredSlice.actions;

export { entered, deleteda }
export default enteredSlice.reducer;