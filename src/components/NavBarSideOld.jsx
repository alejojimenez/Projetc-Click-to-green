import React from 'react';
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import { Navbar, Container } from "react-bootstrap";
import "../styles/StyleNavBarSide.css";

const NavBarSide = () => {

    return (
        <Container fluid>
            <div id="wrapper" className="nav-bar-side-style">
                <Nav className="flex-column fondoColorSecundario" bg="light" variant="dark">
                    <Nav.Link className="mt-4 h5 mb-4" href="/dashboard" eventKey="link-1">Dashboard</Nav.Link>
                    <div className="line"></div>
                    <Nav.Link className="mt-4 h5 mb-4" href="/empresa" eventKey="link-1">Empresa</Nav.Link>
                    <div className="line"></div>                    
                    <Nav.Link className="mt-4 h5 mb-4" href="/usuarios" eventKey="link-1">Usuarios</Nav.Link>
                    <div className="line"></div>                    
                    <Nav.Link className="mt-4 h5 mb-4" href="/contenedores" eventKey="link-1">Contenedores</Nav.Link>
                    <div className="line"></div>                    
                    <Nav.Link className="mt-4 h5 mb-4" href="/notificaciones" eventKey="link-1">Notificaciones</Nav.Link>
                    <div className="line"></div>
                    <Nav.Link className="mt-4 h5 mb-4" href="/" eventKey="link-2">Salir</Nav.Link>
                    <div className="line"></div>
                </Nav>
            </div>
            <div id="wrapper2">
            
            </div>

        </Container>
    )

}

export default NavBarSide;
