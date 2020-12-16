import React, { useContext } from "react";
import { Context } from '../store/appContext';
import { Link } from "react-router-dom"
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import LogoColorPurple from "../img/LogoColorPurple.svg"

//Secciones
// import Home from '../views/Home';
// import HomeApp from '../views/HomeApp';

const NavBarTop = () => {
    const { store } = useContext(Context);

    return (
        <Navbar className="fondoColorSecundario fixed-top" expand="lg">
            <Navbar.Brand href="#home">
                <Link to='/'><img src={LogoColorPurple} height="40" alt="logo" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {
                    store.currentUser !== null ?
                        (
                            <>
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
                            </>
                        )
                        :
                        <>
                            <Nav className="m-auto">
                                <Nav.Link className="mr-5 h5">
                                    <Link to='/quienes-somos'>Quienes Somos</Link>
                                </Nav.Link>
                                <Nav.Link className="mr-5 h5">
                                    <Link to='/planes-de-pago'>Planes de Pago</Link>
                                </Nav.Link>
                                <Nav.Link className="mr-5 h5">
                                    <Link to='/contactanos'>Contactanos</Link>
                                </Nav.Link>
                            </Nav>
                            <Dropdown className="mr-sm-2 dropleft">
                                <Dropdown.Toggle className="fondoColorPrincipal" id="dropdown-basic">
                                    Login
                                    </Dropdown.Toggle>
                                <Dropdown.Menu className="mr-2">
                                    <Dropdown.Item className="mr-2" href="#/action-1">
                                        <Link to='/login'> Login </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item className="mr-2" href="#/action-2">
                                        <Link to='/registro'> Registro </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>
                }
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBarTop;