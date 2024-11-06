import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : 0
}

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers : {
        increament : (state, action) => {
             state.value = state.value + action.payload;
        },

        decreament : (state, action) => {
             state.value = state.value - 1
        },

        switchSign : (state) => {
           state.value = state.value * -1;
        }
    }
})

export const  {increament, decreament, switchSign} = CounterSlice?.actions

export default CounterSlice?.reducer