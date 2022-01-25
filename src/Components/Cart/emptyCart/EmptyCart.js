import React from 'react'
import {Link} from 'react-router-dom'

function EmptyCart(){

    return(
        <div>
        <h3> El carro está vacío </h3>
        <Link to="/"> <button> Volver al Inicio</button></Link>
        </div>
    )
}

export default EmptyCart;