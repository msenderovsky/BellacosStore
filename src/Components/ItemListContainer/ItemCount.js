import React from 'react'
import { useState } from 'react'

function ItemCount({ stock }){

    const [count,setCount]=useState(1)
    const initial=1

    const handleCountIncrease=()=>{
        if (count<stock)
            setCount(count=>count+1)
    }

    const handleCountDecrease=()=>{
        if (count>initial)
            setCount(count=>count-1)

    }

    return (
        <div className="remera">
            <p>Stock: {stock}</p>
            <button onClick={handleCountIncrease}>+</button>
            <p>Cantidad: {count}</p>
            <button onClick={handleCountDecrease}>-</button>
            <button>Comprar</button>
         </div>
    )
}

export default ItemCount