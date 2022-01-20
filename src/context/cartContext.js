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
    
    function deleteItem(item){
        const indice=cartList.findIndex(i=>i.id===item.id)
        cartList.splice(indice,1)
    }

    function cleanCart(){
        setCartList([])
    }

    return(
        <cartContext.Provider value={{
            cartList,
            addToCart,
            cleanCart,
            deleteItem
        }}>
            {children}
        </cartContext.Provider>
    )
}