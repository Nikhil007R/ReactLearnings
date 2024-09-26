import React, { useState } from "react";
import Item from "./Item";

function FoodItems({ fooditems, bought }) {

  let [activeItem, setActiveItem] = useState([])

  let buyOnclick = (item, event)=>{
    let newItem = [...activeItem, item];
    setActiveItem(newItem);
    
  }

  return (
    <ul className="list-group">
      {fooditems.map((item) => (
        <Item
          key={item}
          item={item}
          bought={activeItem.includes(item)}
          handleOnclick={(event) => buyOnclick(item ,event)}
        />
      ))}
    </ul>
  );
}

export default FoodItems;
