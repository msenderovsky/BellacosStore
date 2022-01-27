import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helper/mock'
import ItemList from './ItemList'
import PulseLoader from "react-spinners/PulseLoader";
import './ItemListContainer.css'
import { doc, where, getDocs, query, collection, getFirestore, getDoc } from 'firebase/firestore';

const ItemListContainer =() =>{
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const [producto, setProducto]=useState({})
    const [color,setColor]=useState("#F5A623")

    const {idCategoria} = useParams()

    useEffect(()=>{
        const db=getFirestore()

        /*const queryProd= doc(db,'productos', '5fSFGlZZcskzZSeAyrQX')
        getDoc(queryProd)
        .then(resp=>setProducto({id:resp.id, ...resp.data() } ))

        const queryProd2= doc(db,'productos', 'G3Ed1chlOIJL132JLmPB')
        getDoc(queryProd2)
        .then(resp=>setProducto({id:resp.id, ...resp.data() } ))

        const queryProd3= doc(db,'productos', 'TwxIPk2qnfXNY36EVYJL')
        getDoc(queryProd3)
        .then(resp=>setProducto({id:resp.id, ...resp.data() } ))*/


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

        /*if(idCategoria){
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
        }*/
    }, [])
    
    console.log(productos)

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