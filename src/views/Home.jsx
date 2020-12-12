import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/StyleHome.css";

// Secciones
import WhoWeAre from './WhoWeAre';
import PayMethod from "./PayMethod";
import Contact from "./Contact";

const Home = () => {

    return (
        <>
            <Container className = "style-container-home" fluid>
                <Row>
                    <Col>
                        <div className = "style-img-home">
                            <span className = "text-home-image" >POR UN MEJOR FUTURO</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <WhoWeAre />
            <PayMethod />
            <Contact />
        </>
    )
}

export default Home;
