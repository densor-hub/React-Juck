import App from "../../App";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";


describe(App, () => {
    it("has Show Counter Button", () => {
        const {getByRole} = render(
            <Provider store={store}>
                <App/>
            </Provider>
        )

        const showCounterButton = getByRole("button", {name : "Show Counter"})
        expect(showCounterButton).toBeInTheDocument()
    })
})
