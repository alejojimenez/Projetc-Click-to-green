import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import LogoColorWhite from "../img/LogoColorWhite.svg"

const NavBarTop = () => {
    return (
        <Navbar bg="" expand="lg">
            <Navbar.Brand href="#home"><img src={LogoColorWhite} height="40" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link className="mr-5" href="#quienes-somos">Quienes Somos</Nav.Link>
                    <Nav.Link className="mr-5" href="#planes-de-pago">Planes de pago</Nav.Link>
                    <Nav.Link className="mr-5" href="#sugerencias">Sugerencias</Nav.Link>
                </Nav>
                <Dropdown className="mr-sm-2">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Login
                        </Dropdown.Toggle>
                    <Dropdown.Menu className="mr-2">
                        <Dropdown.Item className="mr-2" href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item className="mr-2" href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item className="mr-2" href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBarTop;