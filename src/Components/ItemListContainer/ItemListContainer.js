import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import PulseLoader from "react-spinners/PulseLoader";
import './ItemListContainer.css'
import { where, getDocs, query, collection, getFirestore } from 'firebase/firestore';

const ItemListContainer =() =>{
    const [loading, setLoading] = useState(true)
    const [color,setColor]=useState("#F5A623")
    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()

    useEffect(()=>{
        const db=getFirestore()

        if (idCategoria){
            const queryCollection= query(collection(db, 'productos'), where('Categoría', '==', idCategoria))
            getDocs(queryCollection)
            .then (res=> setProductos(res.docs.map(prod=>({id:prod.id, ...prod.data()  }) ) ))
            .catch(err=>err)
            .finally(()=>setLoading(false))
        }else{
            const queryCollection2= query(collection(db, 'productos'))
            getDocs(queryCollection2)
            .then (res=> setProductos(res.docs.map(prod=>({id:prod.id, ...prod.data()  }) ) ))
            .catch(err=>err)
            .finally(()=>setLoading(false))
        }
    }, [idCategoria])

    return (
        <div id="itemListContainer">
            {loading ? 
            <>
                <h2 className="load"> Cargando </h2> 
                <PulseLoader color={color}/>
            </>: <ItemList productos={productos}/>}
        </div>
    )
}

export default ItemListContainer