import React from 'react'
import styles from './FoodInput.module.css'

function FoodInput({handleOnKeyDown}) {

    // const handleOnchange = (e)=>{
    //     console.log(e.target.value)
    // }

  return (
    <input type="text" 
    // onChange={(e)=>{console.log(e.target.value)}}   like this or like below with handleonchange function 
    onKeyDown={handleOnKeyDown}
    placeholder='Enter your Name here' 
    className={styles.foodInput}/>
  )
}

export default FoodInput