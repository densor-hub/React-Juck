import ThemeToggler from "../ThemeToggler";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { useSelector } from "react-redux";

describe(ThemeToggler, () => {
    it("has a switch to Dark Button", () => {
        const {getByRole} = render(
            <Provider store={store}>
                <ThemeToggler/>
            </Provider>
        )

        const switchButton = getByRole("button", {name: "Switch to DARK" })
        expect(switchButton).toBeInTheDocument()
    })
})

describe(ThemeToggler, () => {
    it("changes the theme from light mode to dark mode", async () => {
     
        const {getByRole} = render(
            
            <Provider store={store}>
                <ThemeToggler/>
            </Provider>
        )

        const initialTheme = store?.getState()?.theme?.value

        expect(initialTheme).toEqual("light")
        const switchButton = getByRole("button", {name: "Switch to DARK" })

        fireEvent.click(switchButton)
        const updatedTheme = store?.getState()?.theme?.value
        expect(updatedTheme).toEqual("dark")
    })
})