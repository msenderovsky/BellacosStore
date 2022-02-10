import React, { useState } from 'react'
import ItemCount from '../ItemListContainer/ItemCount'
import {useCartContext} from '../../context/cartContext'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
    const {addToCart}=useCartContext()
    const [show, setShow]= useState(true)

    function onAdd(cant){
        addToCart({...producto, cantidad:cant})  
        setShow(false)
    }
    return (
        <div className="ItemDetail">
            <div className="fotoContainer">
                <img className="fotoDetail" src={producto.Foto} alt={producto.Nombre}></img>
            </div>
            <p className="titulo" style={{ color: "black" }}>Título: {producto.Nombre}</p>
            {show ?
                <>
                    <ItemCount onAdd={onAdd} />
                    <p style={{ color: "black" }}>Precio por unidad: ${producto.Precio}</p>
                </>
                :<div className="text-center">
                    <Link to="/cart"><Button variant="success" style={{ marginRight: 10 }}>Finalizar Compra</Button></Link>
                    <Link to="/"><Button style={{ marginLeft: 10 }}>Seguir Comprando</Button></Link>
                </div>}
        </div>
    )
}

export default ItemDetail
