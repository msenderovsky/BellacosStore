import React from 'react'
import EmptyCart from './EmptyCart';
import './Cart.css'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/cartContext";

const Cart = () => {
    const { cartList, deleteItem, mostrarCantidad, cleanCart, totalItems } = useCartContext()

    return(
        (cartList.length===0) ?
            <>
                <EmptyCart/>
            </>
            :<div className='body'>
            <>
                <>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th> Nombre </th>
                                <th> Precio </th>
                                <th> Cantidad </th>
                                <th> Borrar Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList.map(prod => (
                                <tr key={prod.id}>
                                    <th> {prod.Nombre}</th>
                                    <td> {prod.Precio}</td>
                                    <td> {prod.cantidad}</td>
                                    <td><Button variant="warning" onClick={()=>deleteItem(prod.id)} style={{marginLeft:10, marginTop:10}}>Eliminar item</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h5 style={{color:"black"}}>Total a pagar: ${totalItems()}</h5>
                </>
                <h5 style={{color:"black"}}> Total de Items: {mostrarCantidad()}</h5>
                <Button variant="danger" onClick={() => cleanCart()} style={{ marginLeft: 10, marginTop: 10 }}>Eliminar todos</Button>
                <Button className="boton-pago" variant="success"><Link to="/checkout">Ir al pago</Link></Button></>
            </div>
    )
}

export default Cart;