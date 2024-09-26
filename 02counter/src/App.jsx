import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

function App() {

  const [counter, setcounter] = useState(15)
  // const [counter1, setcounter1] = useState(15)

  // let counter = 5;

  const abc = ()=> {
    // console.log("Value added", Math.random())
    // console.log(counter++)
    // counter = counter + 1;

    // if(counter == 20){
    //   setcounter(20)
    // }
    // else{
    //   setcounter(counter + 1);
    // }

    // it can be also written as 
    setcounter(counter => counter == 20? 20 : counter+1)


  }
  const abc1 = ()=> {
    // console.log("Value added", Math.random())
    // console.log(counter++)


    // if(counter == 0){
    //   setcounter(0)
    // }
    // else{
    //   setcounter(counter - 1);
    // }

    setcounter(counter => counter == 0? 0: counter-1)

  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      {/* <h2>Counter Value1 : {counter1}</h2> */}
      
      <p>{counter == 20?"counter cannot be greater than 20 value":""}</p>
      <button onClick={abc}>Add Value</button>
      <br />
      <br />
      
      <button onClick={abc1}>Remove Value </button>
      <p>{counter == 0?"counter cannot be in negative value":""}</p>
    </>
  )
}

export default App
