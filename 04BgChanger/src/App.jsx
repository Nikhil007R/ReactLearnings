import React, { useState } from 'react';
import './App.css'

function App() {

  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white justify-center px-3 py-2 rounded-3xl">
          <button className='outline-none px-4 rounded py-1 text-white shadow-lg' style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>
          <button className='outline-none px-4 rounded py-1  text-white shadow-lg' style={{backgroundColor: "Blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className='outline-none px-4 rounded py-1  text-white shadow-lg' style={{backgroundColor: "Green"}} onClick={()=>setColor("green")}>Green</button>
          <button className='outline-none px-4 rounded py-1 text-white shadow-lg' style={{backgroundColor: "Grey"}} onClick={()=>setColor("grey")}>Grey</button>
          <button className='outline-none px-4 rounded py-1  text-white shadow-lg' style={{backgroundColor: "olive"}} onClick={()=>setColor("olive")}>Olive</button>
          <button className='outline-none px-4 rounded py-1  text-black shadow-lg' style={{backgroundColor: "yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='outline-none px-4 rounded py-1 text-black shadow-lg' style={{backgroundColor: "pink"}} onClick={()=>setColor("pink")}>Pink</button>
          <button className='outline-none px-4 rounded py-1  text-white shadow-lg' style={{backgroundColor: "purple"}} onClick={()=>setColor("purple")}>Purple</button>
          <button className='outline-none px-4 rounded py-1  text-black shadow-lg' style={{backgroundColor: "lavender"}} onClick={()=>setColor("lavender")}>Lavender</button>
          <button className='outline-none px-4 rounded py-1  text-black shadow-lg' style={{backgroundColor: "white"}} onClick={()=>setColor("white")}>White</button>
          <button className='outline-none px-4 rounded py-1  text-white shadow-lg' style={{backgroundColor: "black"}} onClick={()=>setColor("black")}>Black</button>
          <button className='outline-none px-4 rounded py-1  text-black shadow-lg' style={{backgroundColor: "orange"}} onClick={()=>{setColor("orange")}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
