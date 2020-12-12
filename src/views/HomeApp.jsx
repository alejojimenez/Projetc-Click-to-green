import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/StyleHomeApp.css";

// Secciones
import NavBarSide from "../components/NavBarSide";

const HomeApp = () => {

    return (
        <>
            <NavBarSide/>
            <Container className = "style-container-home-app" fluid>
                <Row>
                    <Col>
                        <div className = "style-img-home-app">
                            <span className = "text-home-image-app" >BIENVENIDO A LA APLICACION</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeApp;