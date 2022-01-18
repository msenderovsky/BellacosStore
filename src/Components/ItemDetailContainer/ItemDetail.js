import React from 'react'
import { useState } from 'react'
import ItemCount from '../ItemListContainer/ItemCount'

const ItemDetail = ({producto}) => {
    const [count, setCount]=useState(0)

    function onAdd(cant){
        console.log(cant)  
    }

    return (
        <div className="ItemDetail">
            <img src={producto.foto} alt={producto.titulo}></img>
            <p>Título: {producto.titulo}</p>
            <p>Precio: $ {producto.precio}</p>
            <ItemCount onAdd={onAdd} stock={10}/>
        </div>
    )
}

export default ItemDetail
