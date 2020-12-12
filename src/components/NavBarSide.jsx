import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap";
import LogoColorGreen from "../img/LogoColorGreen.svg"

const NavBarSide = () => {
    return (
        <Navbar className="fondoColorPrimario fixed-top" expand="lg">
            <Navbar.Brand href="#home">
                <Link to='/'><img src={LogoColorGreen} height="40" alt="logo" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link className="mr-5 h5">
                        <Link to='/empresa'>Empresa</Link>
                    </Nav.Link>
                    <Nav.Link className="mr-5 h5">
                        <Link to='/usuarios'>Usuarios</Link>
                    </Nav.Link>
                    <Nav.Link className="mr-5 h5">
                        <Link to='/contenedores'>Contenedores</Link>
                    </Nav.Link>
                    <Nav.Link className="mr-5 h5">
                        <Link to='/notificaciones'>Notificaciones</Link>
                    </Nav.Link>
                    <Nav.Link className="mr-5 h5">
                        <Link to='/'>Salir</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBarSide;