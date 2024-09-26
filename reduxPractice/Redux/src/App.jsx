import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, resetNumber } from './redux/counter/counterSlice'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar/>
      <div>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        <span>Value of count is {count}</span> <button onClick={()=>{dispatch(resetNumber())}}>Reset</button>
        <button onClick={()=>{dispatch(increment())}}>+</button>
      </div>
    </>
  )
}

export default App
