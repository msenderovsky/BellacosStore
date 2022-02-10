import React from 'react'
import EmptyCart from '../Cart/EmptyCart';
import PaymentDetail from './PaymentDetail';
import { useCartContext } from "../../context/cartContext";

const Cart = () => {
    const {cartList } = useCartContext()

    return <div>
    {     
         cartList.length > 0 ? 
        <div> 
            <PaymentDetail/>
        </div>  
        : 
        <EmptyCart />
    }  
    </div>;
    
};

export default Cart;