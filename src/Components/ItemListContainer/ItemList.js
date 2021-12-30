import Item from './Item'
import { Row } from 'react-bootstrap';
function ItemList({remeras}){
    return(
        <div>
            <Row className="">
            {remeras.map(remera=> (<Item key={remera.id} foto={remera.foto} precio={remera.precio} titulo={remera.titulo} descripcion={remera.descripcion} stock={remera.stock}/>
            ))}
            </Row>
        </div>
    )
}

export default ItemList