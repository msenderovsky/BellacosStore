import React, { useState } from 'react'
import ItemCount from '../ItemListContainer/ItemCount'
import {useCartContext} from '../../context/cartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {
    const {cartList, addToCart}=useCartContext()
    const [show, setShow]= useState(true)

    function onAdd(cant){
        addToCart({...producto, cantidad:cant})  
        console.log(cant)
        setShow(false)
    }
    console.log(cartList)

    return (
        <div className="ItemDetail">
            <img src={producto.foto} alt={producto.titulo}></img>
            <p style={{color:"black"}}>Título: {producto.titulo}</p>
            <p style={{color:"black"}}>Precio: $ {producto.precio}</p>

            {show ? <ItemCount onAdd={onAdd} /> : 
            <div>
             <Link  to="/cart"><button>Finalizar Compra</button></Link>
             <Link to="/"><button>Seguir Comprando</button></Link>
             </div> 
             }
            
        </div>
    )
}

export default ItemDetail
