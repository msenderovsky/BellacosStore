import React from 'react'

const ItemDetail = ({producto}) => {
    return (
        <div className="ItemDetail">
            <img src={producto.foto} alt={producto.titulo}></img>
            <p>Título: {producto.titulo}</p>
            <p>Precio: $ {producto.precio}</p>
        </div>
    )
}

export default ItemDetail
