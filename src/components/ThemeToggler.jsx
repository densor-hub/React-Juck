import { useSelector, useDispatch } from "react-redux"
import { switchThemeToDark, switchThemeToLight } from "../store/slices/themeSlice"

const ThemeToggler = () => {
    const themeValue = useSelector(state => state?.theme?.value)
    const dispatch = useDispatch()

    const toggleTheme = () => {
        if (themeValue === "light") {
            dispatch(switchThemeToDark())
        }

        if (themeValue === "dark") {
            dispatch(switchThemeToLight())
        }
    }

    return (
        <div>
            <button onClick={toggleTheme}>{themeValue === "light" ? "Switch to DARK" : "Switch to LIGHT"}</button>
        </div>
    )
}

export default ThemeToggler