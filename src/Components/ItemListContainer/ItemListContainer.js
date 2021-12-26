import React from 'react'
import { useState } from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock="10" initial="1"/>
            {useState[0]}
        </div>
    )
}

export default ItemListContainer