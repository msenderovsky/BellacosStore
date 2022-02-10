import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

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
        const carritoActualizado= () => toast.success('Elementos agregados al carrito');
        carritoActualizado()
    }

    return (
        <div className="remera">
            <p style={{color:"black"}}>Stock: {stock}</p>
            <p style={{color:"black"}}>Cantidad: {count}</p>
            <div className="text-center">
                <Button variant="outline-secondary" onClick={countDecrease} style={{marginRight:10}}>-</Button>
                {count}
                <Button variant="outline-secondary" onClick={countIncrease} style={{marginLeft:10}}>+</Button>
                <Button variant="primary" onClick={handleClick} style={{marginLeft:20}}>Agregar al carrito</Button>
            </div>
         </div>
    )
}

export default ItemCount