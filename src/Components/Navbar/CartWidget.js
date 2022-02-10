import React from 'react'
import { useCartContext } from '../../context/cartContext';
import { FiShoppingCart } from 'react-icons/fi'
import './NavBar.css'

const CartWidget = () => {

    const {cartList , cleanCart , deleteItem, totalItems , mostrarCantidad} = useCartContext()
  
        
    return (
        <div className="carrito">
            <FiShoppingCart className="carritoObject"/>  
            {cartList.length > 0 && <p>{mostrarCantidad()}</p> }
        </div>
    )
}

export default CartWidget