import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helper/mock'
import ItemList from './ItemList'

const ItemListContainer =({greeting}) =>{
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()

    //console.log(idCategoria)
    useEffect(()=>{
        if(idCategoria){
            getFetch
            .then(resp => setProductos(resp.filter(prod=>prod.categoria===idCategoria)))
            .catch(err => console.log(err))
            .finally (()=>setLoading(false))
        }
        else{
            getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally (()=>setLoading(false))
        }
    }, [idCategoria])
    
    
    return (
        <div>
            {loading ? <h2 className="load"> Cargando </h2>: <ItemList productos={productos}/>}
        </div>
    )
}

export default ItemListContainer