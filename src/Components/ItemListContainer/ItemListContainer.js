import { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import { getFetch } from '../../helper/productos'

const ItemListContainer =({greeting}) =>{
    
    const [remeras, setRemeras] = useState([])

    useEffect(()=>{
        getFetch
        .then(resp => setRemeras(resp))
        .catch(err => console.log(err))
        .finally (()=>console.log('final del promise'))
    }, [])
    
    
    return (
            <div className="ItemListContainer">
                <h1>{greeting}</h1>
                <div className="tarjetas">
                {remeras.map(remera=> <ItemCount stock={10} initial={1} key={remera.id} descripcion={remera.descripcion} precio={remera.precio} foto={remera.foto}/>)}
                {useState[0]}
            </div>
        </div>
    )
}

export default ItemListContainer