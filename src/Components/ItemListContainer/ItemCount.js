import React from 'react'
import { useState } from 'react'

function ItemCount({ stock, initial, descripcion, precio, onAdd }){

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
        <div className="remera">
            <h3 className="descripcion">{descripcion}</h3>
            <h4>Precio: ${precio}</h4>
            <p>Cantidad: {count}</p>
            <p>Stock: {stock}</p>
            <button onClick={handleCountIncrease}>+</button>
            <button onClick={handleCountDecrease}>-</button>
            <button onClick={onAdd}>Agregar al carro</button>
            <button>Comprar</button>
         </div>
    )
}

export default ItemCount