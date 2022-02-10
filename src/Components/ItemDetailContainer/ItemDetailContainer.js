import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import PulseLoader from "react-spinners/PulseLoader";
import { doc, getFirestore, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const [color,setColor]=useState("#F5A623")
    const {idDetalle}=useParams()
    
    useEffect(()=>{
        const db=getFirestore()

        const queryProd= doc(db, 'productos', idDetalle)
        getDoc(queryProd)
        .then ((res)=> {setProducto({id:res.id, ...res.data()  }) })
        .catch(err=>err)
        .finally(()=>setLoading(false))

    }, [idDetalle])

    return (
        <div>
            {loading ? 
            <>
                <h2 className="load"> Cargando </h2> 
                <PulseLoader color={color}/>
            </>:<div className="ItemDetailContainer">
                    <ItemDetail producto={producto}/>
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer