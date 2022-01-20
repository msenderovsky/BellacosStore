import React from 'react'
import ItemCount from '../ItemListContainer/ItemCount'
import {useCartContext} from '../../context/cartContext'

const ItemDetail = ({producto}) => {
    const {cartList, addToCart}=useCartContext()

    function onAdd(cant){
        addToCart({...producto, cantidad:cant})  
        console.log(cant)
    }
    console.log(cartList)

    return (
        <div className="ItemDetail">
            <img src={producto.foto} alt={producto.titulo}/>
            <p style={{color:"black"}}>Título: {producto.titulo}</p>
            <p style={{color:"black"}}>Precio: $ {producto.precio}</p>
            <button onClick={()=>onAdd(2)}>Agregar al carrito</button>
            <ItemCount onAdd={onAdd} stock={10}/>
        </div>
    )
}

export default ItemDetail
