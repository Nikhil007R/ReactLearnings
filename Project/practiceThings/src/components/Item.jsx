import React from 'react'
import styles from './Item.module.css'

function Item({item, bought ,handleOnclick}) {

  // const handleOnclick = (e) => {
  //   console.log(e);
  //   console.log(`${item} being bought`)
  // }


  // handleOnclick:- so basically here parent mai ek function bna diya like onclick pr ye ho jaaye and pass kr diya vo function child ko and if child invoke that function onclick wala function run ho jaaye us item pr 

  return (

        <li className={`list-group-item ${bought && "active"} ` }>
          <span className='listItem'>{item}</span>
          <button 
          // onClick={(e)=>handleOnclick(e)} 
          onClick={handleOnclick}
          className={`${styles.button} btn btn-info`}>
            Buy
          </button>
        </li>
  )
}

export default Item;