
import './App.css'
import UserContextProvider from './context/UserContextProvider'

// context api matlab ek variable bna rha hu global . us variable mai saara data jaayega but react mai itni asaani se state update nhi kr skte age asaani se ho skti toh hum ej vaise hi file bna lete variable.js krke usme saare variables rkh kr vhaan se change kr lete but ye ek achi practice nhi hai or react jis chiz ko solve krne ki koshish kr rha hai hum usko bhi break kr rhe hai toh react ise error dedeta hai state mismatch krke because There is no synchronization. 

// context aapko deta hai provider 
// kyuki context hai kya aapko variables hi toh provide kr rha hai 
function App() {
  

  return (
    <UserContextProvider>
      <h1>Hello everyone my name is nikhil how are you 3000. are you really fine ?</h1>
    </UserContextProvider>
  )
}

export default App
