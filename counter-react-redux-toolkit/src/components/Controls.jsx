import { useRef } from "react";
import "../App.css"
import { useDispatch } from "react-redux";
const Controls = () => {

  const dispatch = useDispatch()
  const inputElement = useRef();

  const handleIncrement = ()=>{
    dispatch({type: "INCREMENT"})
  }

  const handleDecrement = ()=>{
    dispatch({type: "DECREMENT"})
  }
  
  const handleAdd = ()=>{
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value
      }
    })
    inputElement.current.value = ""
  }

  const handleSub = ()=>{
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value
      }
    })
    inputElement.current.value = ""
  }

  const handlePrivacy = ()=>{
    dispatch({type: "Privacy_Toggle"})
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
          <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
          <button type="button" className="btn btn-warning" onClick={handlePrivacy}>Privacy Toggle</button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-input">
          <input type="text" placeholder="Enter number" className="number-input" ref={inputElement}/>
          <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
          <button type="button" className="btn btn-danger" onClick={handleSub}>Subtract</button>
      </div>
    </>
  );
};

export default Controls;
