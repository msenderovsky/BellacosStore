import React from 'react'
import logo from '../../assets/logo.png'
import Container from 'react-bootstrap/Container'
import { Navbar, Nav } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi'
import {Link} from 'react-router-dom'

const NavBar = () =>{
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to='/'> <img src={logo} alt="" style={{paddingRight:'10px'}}></img></Link>
                <Link style={{color: "white", padding:'10px'}} to='/'>Inicio</Link>
                <Nav className="me-auto">
                    <Link style={{color: "white", padding:'10px'}} to="/categoria/diseños">Diseños</Link>
                    <Link style={{color: "white", padding:'10px'}} to="/categoria/memes">Memes</Link>
                    <Link style={{color: "white", padding:'10px'}} to='/cart'><FiShoppingCart/></Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
