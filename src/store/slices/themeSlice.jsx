import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
    name:"theme",
    initialState: {value : "light"},
    reducers: {
        switchThemeToLight : (state) => {
            state.value = "light";
        },
        switchThemeToDark : (state) => {
            state.value = "dark"
        }
    }
})

export const {switchThemeToDark, switchThemeToLight} = themeSlice?.actions 

export default themeSlice?.reducer
