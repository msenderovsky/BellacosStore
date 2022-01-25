import React from 'react'
import logo from '../../assets/logo.png'
import Container from 'react-bootstrap/Container'
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget.js'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () =>{
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to='/'> <img src={logo} alt="" style={{paddingRight:'10px'}}></img></Link>
                <Nav className="me-auto">
                    <Link style={{color: "white", padding:'10px'}} to='/'>Inicio</Link>
                    <Link style={{color: "white", padding:'10px'}} to="/categoria/diseños">Diseños</Link>
                    <Link style={{color: "white", padding:'10px'}} to="/categoria/memes">Memes</Link>
                    <Link style={{color: "white", padding:'10px'}} to='/cart'><CartWidget/></Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
