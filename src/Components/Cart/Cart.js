import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useCartContext } from "../../context/cartContext";
import EmptyCart from './emptyCart/EmptyCart'

const Cart = () => {
    const{cartList, cleanCart, deleteItem, totalItems}= useCartContext()
    return (
        <div>
            {cartList.length > 0 ?
            <>    
            {cartList.map(prod=>(
            <div className="carritoItem" key={prod.id}>
                <li key={prod.id}>{prod.titulo} - cant:{prod.cantidad}
                <button onClick={()=>deleteItem(prod.id)}>Eliminar item</button>
                </li>
            </div>))
            }
            <div>
                <button onClick={cleanCart}>Vaciar Carrito</button>
                <button><FiShoppingCart className='cartwidget'/> Terminar Compra</button>
                <p style={{color:"black"}}> Precio total: ${totalItems()}</p>
            </div> 
            </>:
                <EmptyCart/>
            }
        </div>

    )
}

export default Cart