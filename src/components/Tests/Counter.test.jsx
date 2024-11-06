import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Counter from "../Counter";
import App from "../../App";


describe(Counter, () => {
    it ("has a button labelled show Counter", () => {
        const {getByRole} = render(
            <Provider store={store}>
                <Counter/>
            </Provider>
        );
        const showCounterButton = getByRole("button", {name: "Increament" })

        expect(showCounterButton).toBeInTheDocument("Show Counter")
    })
})


