import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App(props) {
  const [count, setCount] = useState(0)

  let object = {
    name : "nikhil",
    age: 21
  }

  let newArr = [1,2,4];

  return (
    <>
      <div className="container flex justify-center flex-col items-center">
        <div className="heading">
          <h1 className='text-3xxl text-black font-bold py-3 m-4'>Tailwind test</h1>
        </div>

        <Cards username="Chai aur Code" btnText="Click me"/>
        <br />
        {/* <Cards username="Hitesh Chaoudhary" btnText="Visit me"/> */}

      </div>


    </>
  )
}

export default App
