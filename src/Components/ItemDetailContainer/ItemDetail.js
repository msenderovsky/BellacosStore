import React from 'react'

const ItemDetail = ({producto}) => {
    return (
        <div>
            <p>Título: {producto.titulo}</p>
            <p>Precio: ${producto.precio}</p>
            <img src={producto.foto} alt=""/>
        </div>
    )
}

export default ItemDetail
