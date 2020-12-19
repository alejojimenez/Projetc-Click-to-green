import React from "react"
import { Link, NavLink, withRouter } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { cerrarSesionAccion } from '../store/userSign'
import { Navbar, Nav } from "react-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import LogoColorPurple from "../img/LogoColorPurple.svg"

//Secciones
// import Home from '../views/Home';
// import HomeApp from '../views/HomeApp';

const NavBarTop = (props) => {
    const dispatch = useDispatch()

    const cerrarSesion = () => {
        dispatch(cerrarSesionAccion())
        props.history.push('/login')
    }

    const activo = useSelector(store => store.usuario.activo)


    return (



                    activo ? (
                        <>
                            <Navbar className="fondoColorSecundario fixed-top" expand="lg">
                        <Navbar.Brand href="#home">
                            <Link to='/home'><img src={LogoColorPurple} height="40" alt="logo" /></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            
                            <Nav className="m-auto">
                                <Nav.Link className="mr-5 h5">
                                    <Link to='/compania'>Empresa</Link>
                                </Nav.Link>
                                <Nav.Link className="mr-5 h5">
                                    <Link to='/contenedores'>Contenedores</Link>
                                </Nav.Link>
                                <Nav.Link className="mr-5 h5">
                                    <Link to='/notificaciones'>Notificaciones</Link>
                                </Nav.Link>

                            </Nav>
                            </Navbar.Collapse>

                            <NavLink className="btn btn-outline-secondary fondoColorPrincipal colorFondoLetra mr-2 " to="/home" exact>Inicio</NavLink>
                            <button className="btn btn-outline-secondary fondoColorPrincipal colorFondoLetra mr-2 " onClick={() => cerrarSesion()}>
                                Cerrar Sesión

                            </button>
                </Navbar>
            </>
        ) : (
                <>
                    <Navbar className="fondoColorSecundario fixed-top" expand="lg">
                        <Navbar.Brand href="#home">
                            <Link to='/home'><img src={LogoColorPurple} height="40" alt="logo" /></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Collapse id="basic-navbar-nav">                            

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

                            </Navbar.Collapse>
                            <NavLink className="btn btn-outline-secondary fondoColorPrincipal colorFondoLetra mr-2 btn-md" to="/login" exact>Login</NavLink>
                        </Navbar>
                        </>
                    )

    )
}

export default withRouter(NavBarTop)