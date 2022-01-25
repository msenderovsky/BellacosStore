import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useCartContext } from "../../context/cartContext";
import EmptyCart from './emptyCart/EmptyCart'
import Button from 'react-bootstrap/Button'

const Cart = () => {
    const{cartList, cleanCart, deleteItem, totalItems}= useCartContext()
    return (
        <div>
            {cartList.length > 0 ?
            <>    
            {cartList.map(prod=>(
            <div className="carritoItem" key={prod.id}>
                <li key={prod.id}>{prod.titulo} - cant:{prod.cantidad}
                <Button variant="warning" onClick={()=>deleteItem(prod.id)} style={{marginLeft:10, marginTop:10}}>Eliminar item</Button>
                </li>
            </div>))
            }
            <div>
                <Button variant="warning" onClick={cleanCart} style={{margin:10}}>Vaciar Carrito</Button>
                <Button><FiShoppingCart className='cartwidget' style={{marginRight:5}}/> Terminar Compra</Button>
                <p style={{color:"black"}}> Precio total: ${totalItems()}</p>
            </div> 
            </>:
                <EmptyCart/>
            }
        </div>

    )
}

export default Cart