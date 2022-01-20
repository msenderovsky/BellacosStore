import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function ItemCount({ onAdd, stock=10 }){

    const [count,setCount]=useState(1)
    const [show,setShow]=useState(true)

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

    function buttonDisappear(){
        setShow(false)
    }

    return (
        <div className="remera">
            <p style={{color:"black"}}>Stock: {stock}</p>
            <p style={{color:"black"}}>Cantidad:</p>
            <button onClick={buttonDisappear}>Finalizar compra</button>
            { show ? <>
            <button onClick={handleCountDecrease}>-</button>
            {count}
            <button onClick={handleCountIncrease}>+</button>
            </>
            :<>
                <Link to={`/cart`}>
                    <button onClick={handleClick}>Comprar</button>
                </Link>
                <Link to={`/`}>
                    <button>Inicio</button>
                </Link> 
            </>
            }
            
         </div>
    )
}

export default ItemCount