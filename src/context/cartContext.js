import React, { createContext, useState, useContext } from 'react'

const cartContext=createContext([]);

export function useCartContext(){
    return useContext(cartContext)
}

export const CartContextProvider =({children})=>{

    const[cartList, setCartList]= useState([])

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
    }

    function cleanCart(){
        setCartList([])
    }

    function totalItems(){
        const totalPrice=cartList.reduce((prev,curr)=>prev+curr.Precio*curr.cantidad,0)
        return totalPrice
    }

    function showTotal(){
        const totalItems=cartList.map(mostrar=>mostrar.cantidad).reduce((prev,curr)=>prev+curr,0)
        return totalItems
    }

    return(
        <cartContext.Provider value={{
            cartList,
            addToCart,
            cleanCart,
            deleteItem,
            totalItems,
            showTotal,
        }}>
            {children}
        </cartContext.Provider>
    )
}