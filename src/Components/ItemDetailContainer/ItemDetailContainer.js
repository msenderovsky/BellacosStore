import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helper/mock'
import ItemDetail from './ItemDetail'
import { doc, getFirestore, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const {idDetalle}=useParams()
    
    useEffect(()=>{
        const db=getFirestore()

        const queryProd= doc(db, 'productos', idDetalle)
        getDoc(queryProd)
        .then ((res)=> {setProducto({id:res.id, ...res.data()  }) })
        .catch(err=>err)
        .finally(()=>setLoading(false))

       /* getFetch
        .then(resp=> setProducto(resp.find(prod=>prod.id===idDetalle)))*/
    }, [idDetalle])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer