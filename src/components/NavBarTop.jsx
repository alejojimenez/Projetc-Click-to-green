import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import LogoColorWhite from "../img/LogoColorWhite.svg"

const NavBarTop = () => {
    return (
        <Navbar className="fondoColorSecundario fixed-top" expand="lg">
            <Navbar.Brand href="#home">
                <Link to='/'><img src={LogoColorWhite} height="40" alt="logo" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link className="mr-5 h5">
                        <Link to='/quienes-somos'>Quienes Somos</Link>
                    </Nav.Link>
                    <Nav.Link className="mr-5 h5">
                        <Link to='/planes-de-pago'>Planes de pago</Link>
                    </Nav.Link>
                    <Nav.Link className="mr-5 h5">
                        <Link to='/sugerencias'>Sugerencias</Link>
                    </Nav.Link>
                </Nav>
                <Dropdown className="mr-sm-2 dropleft">
                    <Dropdown.Toggle className="fondoColorPrincipal" id="dropdown-basic">
                        Login
                        </Dropdown.Toggle>
                    <Dropdown.Menu className="mr-2">
                        <Dropdown.Item className="mr-2" href="#/action-1">
                            <Link>Login</Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="mr-2" href="#/action-2">
                            <Link>Register</Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBarTop;