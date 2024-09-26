import { createStore } from 'redux'

const INITIAL_VALUE = {
    counter: 0,
    privacy: false
}

const counterReducer = (store = INITIAL_VALUE, action)=>{
    if(action.type === "INCREMENT"){
        return {...store , counter: store.counter + 1}
    }
    else if(action.type === "DECREMENT"){
        return {...store , counter: store.counter - 1} 
    }
    else if(action.type === "ADD"){
        return {...store ,counter: store.counter + Number(action.payload.num)}
    }
    else if(action.type === "SUBTRACT"){
        return {...store , counter: store.counter - Number(action.payload.num)}
    }
    else if(action.type === "Privacy_Toggle"){
        return {...store , privacy: !store.privacy}
    }
    return store;
}


// lets say if we have 100 properties in our store so we cannot return each and every value in every return statement right? So in order to face this difficulty we use spread operator to get all the values in store and then the value that we are going to change, change them after that  

// const counterReducer = (store = INITIAL_VALUE, action)=>{
//     if(action.type === "INCREMENT"){
//         return {counter: store.counter + 1, privacy: store.privacy}
//     }
//     else if(action.type === "DECREMENT"){
//         return {counter: store.counter - 1, privacy: store.privacy} 
//     }
//     else if(action.type === "ADD"){
//         return {counter: store.counter + Number(action.payload.num), privacy: store.privacy}
//     }
//     else if(action.type === "SUBTRACT"){
//         return {counter: store.counter - Number(action.payload.num), privacy: store.privacy}
//     }
//     else if(action.type === "Privacy_Toggle"){
//         return {counter: store.counter, privacy: !store.privacy}
//     }
//     return store;
// }

const counterStore = createStore(counterReducer)

export default counterStore;