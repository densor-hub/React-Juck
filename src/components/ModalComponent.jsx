import { createPortal } from "react-dom"

const ModalComponent = () => {
    return (
        createPortal(<div>I AM A MODAL OUTSIDE THE REACT TREE</div>,
            document.getElementById("modal")
        )
    )
}

export default ModalComponent

