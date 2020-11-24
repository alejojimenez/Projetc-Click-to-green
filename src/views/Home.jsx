import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import parqueOhiggins from "../img/parque-o-higgins.jpg";
import "../styles/StyleHome.css";

// Secciones
//* <img src = {parqueOhiggins} alt="Parque Bernardo O'Higgins" /> */
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
