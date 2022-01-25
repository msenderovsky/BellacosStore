import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function EmptyCart(){

    return(
        <div>
        <h3 style={{textAlign:"center"}}> El carro está vacío </h3>
        <Link to="/"> <Button variant="primary"> Volver al Inicio</Button></Link>
        </div>
    )
}

export default EmptyCart;