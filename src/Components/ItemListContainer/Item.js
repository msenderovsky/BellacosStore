import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

function Item({  id, foto, precio, titulo, descripcion, stock}){
    return(
        <Col>
        <Card className="cardStyle">
            <div className="centerThings">
                <Card.Img className="cardImg" src={foto}/>
            </div>
            <Card.Body>
                <Card.Title className="cardTitle">{titulo}</Card.Title>
                <Card.Text className="cardText">{descripcion}</Card.Text>
                <Link to={`/detalle/${id}`}>
                    <Button className="cardBoton">Detalles</Button>
                </Link>
            </Card.Body>
            <ItemCount stock={stock}/>
        </Card>
        </Col>
    )
}

export default Item