import React, { createContext, useState, useContext } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {toast } from 'react-toastify';
const cartContext=createContext([]);

export function useCartContext(){
    return useContext(cartContext)
}

export const CartContextProvider =({children})=>{

    const [cartList, setCartList]= useState([])
   
    
    function addToCart(items){
        const indice=cartList.findIndex(i=>i.id===items.id)

        if (indice>-1){
            const cantV=cartList[indice].cantidad
            let cantN=cantV+items.cantidad
            cartList[indice].cantidad=cantN
            let aux=[...cartList]
            setCartList(aux)
        }else
        setCartList([...cartList,items])
    }

    function deleteItem(id){
        setCartList(cartList.filter(item => item.id !== id))
        const notify=()=>toast.warn("Elemento eliminado")
        notify()
    }

    function cleanCart(){
        setCartList([])
    }

    function totalItems(){
        const totalPrice = cartList.map(valor => valor.cantidad * valor.Precio).reduce((prev,curr)=> prev + curr,0)
        return totalPrice
    }

    

    function mostrarCantidad(){
        const mostrar=cartList.map(mostrar=>mostrar.cantidad).reduce((prev,curr)=>prev+curr,0)
        return mostrar
    }


    return(
        <cartContext.Provider value={{
            cartList,
            setCartList,
            addToCart,
            cleanCart,
            totalItems,
            deleteItem,
            mostrarCantidad,
        }}>
            {children}
        </cartContext.Provider>
    )
}