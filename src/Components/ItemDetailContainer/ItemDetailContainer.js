import {useEffect} from 'react'
import {useState} from 'react'
import { getFetch } from '../../helper/mock'
import ItemDetail from './ItemDetail'

const ItemDetailContaijer = () => {

    const [producto, setproducto] = useState({})

    useEffect(()=>{
        getFetch
        .then(resp=> setproducto(resp.find(prod=>prod.id=== 1)))
    }, [])

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContaijer
