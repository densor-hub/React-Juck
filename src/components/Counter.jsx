import { useSelector, useDispatch } from "react-redux"
import {decreament, increament, switchSign} from "../store/slices/counterSlice"
// import { useEffect } from "react"

const Counter = () => {
const dispatch = useDispatch()
const currentCount =  useSelector((state) => { return state?.counter?.value})

const dispatchIncreament = () =>  dispatch(increament(2))
const dispatchDecreament = () => dispatch(decreament())
const dispatchSwitchSign = () => dispatch(switchSign())
 return (
    <main>
        <button onClick={dispatchIncreament}> Increament </button>
        <hr/>

        <div data-testid="currentCount">{currentCount}</div>
        <hr/>

        <button  onClick={dispatchDecreament}>Decreament</button>
        <hr/>

        <div><button onClick={dispatchSwitchSign}>Switch Sign</button></div>
 </main>
 )
}

export default Counter