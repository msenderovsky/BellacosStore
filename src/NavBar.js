import React from 'react'
import logo from './assets/logo.png'
import Container from 'react-bootstrap/Container'
import { Navbar, Nav } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi'

const NavBar = () =>{
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <img src={logo} style={{paddingRight:'10px'}}></img>
                <Navbar.Brand href="#inicio">Inicio</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#shop" style={{paddingLeft:'2px'}}><FiShoppingCart/>Shop</Nav.Link>
                    <Nav.Link href="#disenos">Diseños</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
