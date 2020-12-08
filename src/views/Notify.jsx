import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/StyleHome.css";

// Secciones
import NavBarTop from "../components/NavBarTop";

const Notify = () => {

    return (
        <>
            {/* <NavBarTop /> */}
            {/* <Container fluid> */}
                <Row>
                    <Col>
                        <div className = "StyleImgHome">
                            <span className = "textHomeImage" >ENVIAR NOTIFICACION</span>
                        </div>
                    </Col>
                </Row>
            {/* </Container>             */}
        </>
    
    )
}

export default Notify;
