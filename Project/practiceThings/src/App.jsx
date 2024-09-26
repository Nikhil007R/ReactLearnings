import { useState } from 'react';
import './App.css'
import Contact from './components/Contact';
import ErrorMessage from './components/ErrorMessage';
import FoodInput from './components/FoodInput';
import FoodItems from './components/FoodItems';

function App() {

  // let foodItems = ["Nikhil", "om", "Nitin", "Nirbhay", "Manan", "Nazim", "Piyush", "Rajit"];

  const [foodItems, setFoodItems] = useState([])

  const [textToShow, setTextToShow] = useState("Food item entered by User")

  const onKeyDown = (e)=>{
    
    if(e.key === "Enter"){
      
      let newItem = e.target.value;
      let newFoodItems = [...foodItems, newItem];
      setFoodItems(newFoodItems);
      e.target.value = ""
      
    }
    console.log(e.target.value);
    // handleTextToShow(textToShow);
  }

  // const handleTextToShow = (e)=>{
  //   document.getElementsByClassName("textToShow")[0].innerHTML = e;
  // }

  return (
    <>
      <Contact>
        <h1 className='foodHeading'>Tomodachi </h1>
        <FoodInput handleOnKeyDown={onKeyDown}/>
        {/* <p className="textToShow">{textToShow}</p> */}
        <ErrorMessage fooditems={foodItems}/>
        <FoodItems fooditems={foodItems}/>  
      </Contact> 

      <Contact>
        <p>Above is the list of my friends</p>
      </Contact> 
  
    </>
  )
}

export default App;
