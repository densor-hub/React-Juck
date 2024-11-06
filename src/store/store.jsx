import { configureStore } from "@reduxjs/toolkit"
import CounterSlice from "./slices/counterSlice"
import ThemeSlice from "./slices/themeSlice"

export const store = configureStore({
    reducer : {
        counter : CounterSlice,
        theme : ThemeSlice
    }
})

