import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useCartContext } from "../../context/cartContext";

const Cart = () => {
    const{cartList, cleanCart}= useCartContext()
    return (
        <div>
            
            {cartList.map(prod=><li key={prod.id}>{prod.titulo} - cant:{prod.cantidad}</li>)}
            <button onClick={cleanCart}> <FiShoppingCart className='cartwidget'/> Vaciar carrito</button>
        </div>
    )
}

export default Cart