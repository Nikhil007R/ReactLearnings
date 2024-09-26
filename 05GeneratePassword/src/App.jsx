import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

// ******************************************************
// 1-> useCallback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function 
// 2-> useEffect: runs the function inside it whenever the page renders first time or dependencies are changed
// 3-> useRef: used to give reference of selected components in our page so that functions can be performed on referenced values. (kisi bhi chiz ka jab hume reference lena hota hai tb use aata hai useref)

function App() {

  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const [btn, setbtn] = useState("copy");

  // useref hook 
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0987654321";
    if (charAllowed) str += "!@#$%^&*(){}<>?~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);


  }, [charAllowed, numberAllowed, length, setpassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    setbtn("Copied")
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);

    setTimeout(()=>{
      setbtn("copy")
    }, 1500)

  }, [password])

  
  useEffect(()=>{
  passwordGenerator()
  }, [charAllowed, numberAllowed, length])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >{btn}</button>

        </div>
        <div className="flex flex-wrap text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberinput"
            onChange={()=>{
              setnumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="numberinput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterinput"
            onChange={()=>{
              setcharAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="characterinput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
