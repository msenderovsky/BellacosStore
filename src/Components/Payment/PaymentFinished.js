import React from 'react';
import { useCartContext } from "../../../context/cartContext";
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const PaymentFinished = () => {
    const {setPaymentFinished, inputs} = useCartContext()

    return (
        <div> 
            <h2 style={{color:'black'}}>¡Pago realizado!</h2>
            <p style={{color:'black'}}>Gracias por su compra {inputs.apellido}</p>
            <p style={{color:'black'}}>El número de orden de su pedido de compra es {inputs.orderId}</p>
            <button onClick={() => setPaymentFinished(false)}><FiShoppingCart className='cartwidget'/><Link to="/">Finalizar Compra</Link></button>
            </div> 
    );
};

export default PaymentFinished;