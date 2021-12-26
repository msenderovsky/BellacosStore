import React from 'react'
import { useState } from 'react'

function ItemCount({ stock, initial, onAdd }){

    const [count,setCount]=useState(1)
    
    const handleCountIncrease=()=>{
        if (count<stock)
            setCount(count+1)
    }

    const handleCountDecrease=()=>{
        if (count>initial)
            setCount(count-1)

    }

    return (
        <div>
            {count}
            <button onClick={handleCountIncrease}>+</button>
            <button onClick={handleCountDecrease}>-</button>
            <button onClick={onAdd}>Agregar al carro</button>
         </div>
    )
}

export default ItemCount