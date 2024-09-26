import { useSelector } from "react-redux";

const DisplayCounter = ()=>{
    // const value = useSelector(store => store.counter)

    const value = useSelector(store => store.counter.counterVal)

    const toggle = useSelector(store => store.privacy)

    return(
        // <p className="lead mb-4"> {!toggle ? <span>Current Value {value}</span> : <span>Value is Private</span> } </p>
        <p className="lead mb-4"> {toggle && <span>Counter is Private</span>} {!toggle && <span>Current Value {value}</span>} </p>
    )

}

export default DisplayCounter;