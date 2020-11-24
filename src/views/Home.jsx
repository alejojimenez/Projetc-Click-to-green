import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/StyleHome.css";

// Secciones
import NavBarTop from "../components/NavBarTop";

const Home = () => {

    return (
        <>
            <NavBarTop/>
            <Container className = "StyleContainerHome" fluid>
                <Row>
                    <Col>
                        <div className = "StyleImgHome">
                            <span className = "textHomeImage" >POR UN MEJOR FUTURO</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
