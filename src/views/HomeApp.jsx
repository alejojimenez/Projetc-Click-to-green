import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/StyleHome.css";

// Secciones
import NavBarSide from "../components/NavBarSide";

const HomeApp = () => {

    return (
        <>
            <NavBarSide/>
            <Container className = "style-container-home" fluid>
                <Row>
                    <Col>
                        <div className = "style-img-home">
                            <span className = "text-home-image" >BIENVENIDO</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeApp;