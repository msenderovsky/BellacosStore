import Item from './Item'
import { Row } from 'react-bootstrap';
import {memo} from 'react'

const ItemList = memo (({productos})=>{
    return(
        <div className="productos">
            <Row className="">
            {productos.map(producto=> (<Item key={producto.id} id={producto.id} foto={producto.foto} precio={producto.precio} titulo={producto.titulo} descripcion={producto.descripcion} stock={producto.stock}/>
            ))}
            </Row>
        </div>
    )
}
, (oldProps,newProps)=> oldProps.productos.length===newProps.productos.length)

export default ItemList