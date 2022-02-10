import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'

function Item({id, foto, precio, titulo, descripcion, stock}){

    return(
            <div className="grid">
                <Card className="cardStyle" style={{width:215, marginBottom:10, marginTop:20}}>
                    <div className="centerThings">
                        <Card.Img className="cardImg" style={{height:200, width:215, justifyContent:'center'}} src={foto}/>
                    </div>
                    <div id="cardBody">
                        <Card.Body style={{}}>
                            <Card.Title className="cardTitle" style={{textAlign:"center"}}>{titulo}</Card.Title>
                            <Card.Text className="cardText">{descripcion}</Card.Text>
                            <Link to={`/detalle/${id}`}>
                                <div className="text-center">
                                <Button className="cardBoton" style={{width:100}}>Detalles</Button>
                                </div>
                            </Link>
                        </Card.Body>
                    </div>
                </Card>
            </div>
    )
}

export default Item