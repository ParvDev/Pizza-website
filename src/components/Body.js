import React from 'react'
import "./Body.css"
import pizza from "../data/pizza"
import PizzaItems from './PizzaItems';
import "../images/pizza.png"

export default function Body() {
    const data = pizza;
  return (
    <div className='body'>
      <div>

      </div>
      {data.map((item, index ) => (
           <PizzaItems pizza={item} key={index}>
             <p>Size: </p>
             <ul>
               <li>Regular: ${item.regular}</li>
               <li>Medium: ${item.medium}</li>
               <li>Large: ${item.large}</li>
             </ul>
           </PizzaItems>
        ))}
    </div>
  )
}
