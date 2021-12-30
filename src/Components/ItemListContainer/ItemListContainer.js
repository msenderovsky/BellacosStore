import { useState, useEffect } from 'react'
import { getFetch } from '../../helper/mock'
import ItemList from './ItemList'

const ItemListContainer =({greeting}) =>{
    const [loading, setLoading] = useState(true)
    const [remeras, setRemeras] = useState([])

    useEffect(()=>{
        getFetch
        .then(resp => setRemeras(resp))
        .catch(err => console.log(err))
        .finally (()=>setLoading(false))
    }, [])
    
    
    return (
        <div>
            {loading ? <h2 className="load"> Cargando </h2>: <ItemList remeras={remeras}/>}
        </div>
    )
}

export default ItemListContainer