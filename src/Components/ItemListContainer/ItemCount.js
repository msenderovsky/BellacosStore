import React from 'react'
import { useState } from 'react'

function ItemCount({ onAdd, stock=10 }){

    const [count,setCount]=useState(1)

    const countIncrease=()=>{
        if (count<stock)
            setCount(count+1)
    }

    const countDecrease=()=>{
        if (count>1)
            setCount(count-1)
    }

    function handleClick(){
        onAdd(count)
    }

    return (
        <div className="remera">
            <p style={{color:"black"}}>Stock: {stock}</p>
            <p style={{color:"black"}}>Cantidad:{count}</p>

            <button onClick={handleClick}>Agregar al carrito</button>
            <button onClick={countDecrease}>-</button>
            {count}
            <button onClick={countIncrease}>+</button>
  
            
         </div>
    )
}

export default ItemCount