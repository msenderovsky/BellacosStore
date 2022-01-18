import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function ItemCount({ onAdd, stock=1 }){

    const [count,setCount]=useState(1)

    const handleCountIncrease=()=>{
        if (count<stock)
            setCount(count+1)
    }

    const handleCountDecrease=()=>{
        if (count>1)
            setCount(count-1)
    }

    function handleClick(){
        onAdd(count)
    }

    return (
        <div className="remera">
            <p>Stock: {stock}</p>
            <button onClick={handleCountDecrease}>-</button>
            <p>Cantidad: {count}</p>
            <button onClick={handleCountIncrease}>+</button>
            <Link to={`/cart`}>
                <button onClick={handleClick}>Comprar</button>
            </Link>
         </div>
    )
}

export default ItemCount