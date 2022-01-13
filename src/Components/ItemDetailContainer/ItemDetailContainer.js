import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helper/mock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setproducto] = useState({})
    const {idDetalle}=useParams()
    
    useEffect(()=>{
        getFetch
        .then(resp=> setproducto(resp.find(prod=>prod.id===idDetalle)))
    }, [idDetalle])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer