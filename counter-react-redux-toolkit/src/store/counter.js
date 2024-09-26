import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal: 0},
    reducers: {
        increment: (state, action)=>{
            // console.log(state, action);
            state.counterVal++;
        },
        decrement: (state, action)=>{
            // console.log(state, action);
            state.counterVal--; 
        },
        add: (state, action)=>{
            state.counterVal += Number(action.payload.num)
        },
        sub: (state, action)=>{
            state.counterVal -= Number(action.payload.num)
        },
        
    }
})

export const counterActions = counterSlice.actions
export default counterSlice;