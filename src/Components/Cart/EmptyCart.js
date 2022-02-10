import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function EmptyCart(){

    return(
        <div className='body' style={{ display: "block" , justifyContent: 'center'}}>
        <h3 style={{textAlign:"center"}}>  Carro de productos vacío </h3>
        <Link to="/"> <Button variant="primary"> Volver al Inicio</Button></Link>
        </div>
    )
}

export default EmptyCart;