import React, { createContext, useState, useContext } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {toast } from 'react-toastify';
const cartContext=createContext([]);

export function useCartContext(){
    return useContext(cartContext)
}

export const CartContextProvider =({children})=>{

    const [cartList, setCartList]= useState([])
    const [cartTotal, setCartTotal]= useState([])
   
    
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
        console.log("total de un item: "+totalPrice)
        return totalPrice
    }

    function totalPorItem(){
        const total = cartList.map(mostrar => mostrar.cantidad * mostrar.Precio)
        console.log("total por item: "+total)
        return total
    }
    

    function mostrarCantidad(){
        const mostrar=cartList.map(mostrar=>mostrar.cantidad).reduce((prev,curr)=>prev+curr,0)
        console.log("Total de items "+mostrar)
        return mostrar
    }


    return(
        <cartContext.Provider value={{
            cartList,
            setCartList,
            setCartTotal,
            cleanCart,
            addToCart,
            cleanCart,
            totalItems,
            deleteItem,
            totalItems,
            mostrarCantidad,
            totalPorItem,
        }}>
            {children}
        </cartContext.Provider>
    )
}