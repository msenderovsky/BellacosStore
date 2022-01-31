import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useCartContext } from "../../context/cartContext";
import EmptyCart from './emptyCart/EmptyCart'
import Button from 'react-bootstrap/Button'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

const Cart = () => {
    const{cartList, cleanCart, deleteItem, totalItems}= useCartContext()
    const[orderId,setOrderId]=useState("");
    const [dataForm, setDataForm]=useState({
        nombre:'',
        email:'',
        teléfono:''
    });

    const makePurchase=(e)=>{
        e.preventDefault()

        let order={}

        order.buyer=dataForm
        order.total=totalItems();

        order.items=cartList.map(item=>{
            const id= item.id;
            const nombre= item.Nombre;
            const precio= item.Precio*item.cantidad;
            return {id, nombre,precio}
        })

        const db=getFirestore();
        const orderCollection= collection(db, "ordenes")
        addDoc(orderCollection, order)
        .then (resp=>setOrderId(resp.id))
        .catch(err=>console.log(err))
        .finally (()=>
        console.log("asd "+orderId))

    }

    function handleChange(e){
        console.log(e.target.name)
        console.log(e.target.value)
        setDataForm({...dataForm, 
            [e.target.name]:e.target.value
        })
    }
    console.log(dataForm)

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
                <form onSubmit={makePurchase}>
                    <input
                        type='text'
                        name='nombre'
                        placeholder='nombre'
                        onChange={handleChange}
                        value={dataForm.nombre}
                    />
                    <br/>
                    <input
                        type='text'
                        name='teléfono'
                        placeholder='tel'
                        onChange={handleChange}
                        value={dataForm.teléfono}
                    />
                    <br/>
                    <input
                        type='email'
                        name='email'
                        placeholder='email'
                        onChange={handleChange}
                        value={dataForm.email}
                    />
                    <br/>
                    <button><FiShoppingCart className='cartwidget'/> Terminar Compra</button>
                </form>
                <p style={{color:"black"}}> Precio total: ${totalItems()}</p>
                <p style={{color:"black"}}> Su ID de compra es {orderId}</p>
            </div> 
            </>:
                <EmptyCart/>
            }
            
        </div>

    )
}

export default Cart