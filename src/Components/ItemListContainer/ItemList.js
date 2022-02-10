import Item from './Item/Item'
import { Row } from 'react-bootstrap';
import {memo} from 'react'

const ItemList = memo (({productos})=>{
    return(
        <div className="productos">
            <Row className="">
            {productos.map(producto=> (<Item key={producto.id} id={producto.id} foto={producto.Foto} precio={producto.Precio} titulo={producto.Nombre} descripcion={producto.Descripción} stock={producto.Stock}/>
            ))}
            </Row>
        </div>
    )
}
, (oldProps,newProps)=> oldProps.productos.length===newProps.productos.length)

export default ItemList