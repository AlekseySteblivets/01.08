
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};

const slice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        changeCounter(state, { payload }) { state.counter = payload },
        
        increment(state) { state.counter++ },
    
        decrement(state) { state.counter-- },
    },

});

console.log(slice)

const {increment, decrement, changeCounter} = slice.actions;
export {increment, decrement, changeCounter };
export default slice.reducer;