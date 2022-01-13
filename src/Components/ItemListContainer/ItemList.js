import Item from './Item'
import { Row } from 'react-bootstrap';
function ItemList({productos}){
    return(
        <div className="productos">
            <Row className="">
            {productos.map(producto=> (<Item key={producto.id} foto={producto.foto} precio={producto.precio} titulo={producto.titulo} descripcion={producto.descripcion} stock={producto.stock}/>
            ))}
            </Row>
        </div>
    )
}

export default ItemList