import React from 'react'

const ItemListContainer = (props) => {

    const {greeting}= props
    
    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer
