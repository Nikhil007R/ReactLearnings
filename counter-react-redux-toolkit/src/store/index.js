import {configureStore, createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal: 0},
    reducers: {
        increment: (state, action)=>{
            console.log(state, action);
            state.counterVal++;
        },
        decrement: (state, action)=>{
            console.log(state, action);
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

const privacySlice = createSlice({
    name: 'privacy',
    initialState: false,
    reducers: {
        toggle: (state)=>{
            return state = !state;
        }
    }
})

const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }
})

export const counterActions = counterSlice.actions
export const privacyActions = privacySlice.actions

export default counterStore;

// import { createStore } from 'redux'

// const INITIAL_VALUE = {
    //     counter: 0,
//     privacy: false
// }

// const counterReducer = (store = INITIAL_VALUE, action)=>{

    //     if(action.type === "INCREMENT"){
        //         return {...store , counter: store.counter + 1}
        //     }
//     else if(action.type === "DECREMENT"){
    //         return {...store , counter: store.counter - 1} 
    //     }
    //     else if(action.type === "ADD"){
//         return {...store ,counter: store.counter + Number(action.payload.num)}
//     }
//     else if(action.type === "SUBTRACT"){
//         return {...store , counter: store.counter - Number(action.payload.num)}
//     }
//     else if(action.type === "Privacy_Toggle"){
//         return {...store , privacy: !store.privacy}
//     }
//     return store;
// }