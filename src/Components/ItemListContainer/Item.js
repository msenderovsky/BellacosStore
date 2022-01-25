import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'

function Item({id, foto, precio, titulo, descripcion, stock}){

    return(
        <Col>
        <Card className="cardStyle" style={{width:225}}>
            <div className="centerThings">
                <Card.Img className="cardImg" style={{height:200, width:215, justifyContent:'center'}} src={foto}/>
            </div>
            <div id="cardBody">
                <Card.Body style={{}}>
                    <Card.Title className="cardTitle">{titulo}</Card.Title>
                    <Card.Text className="cardText">{descripcion}</Card.Text>
                    <Link to={`/detalle/${id}`}>
                        <Button className="cardBoton" style={{alignItems:'center', justifyContent:'center'}}>Detalles</Button>
                    </Link>
                </Card.Body>
            </div>
        </Card>
        </Col>
    )
}

export default Item