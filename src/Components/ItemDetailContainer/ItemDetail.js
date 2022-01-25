import React, { useState } from 'react'
import ItemCount from '../ItemListContainer/ItemCount'
import {useCartContext} from '../../context/cartContext'
import Button from 'react-bootstrap/Button'
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
            <p style={{color:"black"}}>Precio: ${producto.precio}</p>

            {show ? <ItemCount onAdd={onAdd} /> : 
            <div class="text-center">
             <Link  to="/cart"><Button variant="success" style={{marginRight:10}}>Finalizar Compra</Button></Link>
             <Link to="/"><Button style={{marginLeft:10}}>Seguir Comprando</Button></Link>
             </div> 
             }
            
        </div>
    )
}

export default ItemDetail
