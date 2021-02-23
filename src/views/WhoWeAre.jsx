import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/StyleWhoWeAre.css";

const WhoWeAre = () => {
    return (
        <>
            <Container className="style-container-who-we-are" fluid>
                <Row className='position-title-whoweare justify-content-center'>
                    <h2 className="colorPrincipal mb-4 ">QUIENES SOMOS</h2>
                </Row>
                <br />
                <Row className='justify-content-center md-4'>
                    <Col sm={'1'} md={'10'}>
                        <p>Nacimos de una idea para un proyecto educativo, hoy somos una realidad y queremos formar parte esencial
                            en la cadena de valor del rubro del reciclaje, Por un Mejor Futuro.
                        </p>
                    </Col>
                </Row>
                <br />
                <Row className='justify-content-center' >
                    <Col sm={'1'} md={'4'}>
                        <Row>
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <h3 className="colorPrincipal">Misión</h3>
                                </div>
                            </div>
                        </Row>
                        <Row className='justify-content-center'>
                            <div className="row align-items-start">
                                <div className="col-10">
                                    Ofrecer una herramienta de última tecnológica a empresas que son parte de la cadena de valor en los procesos de tratamiento de materiales reciclables.
                            </div>
                            </div>
                        </Row>
                        <br /><br />
                        <Row>
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <h3 className="colorPrincipal">Visión</h3>
                                </div>
                            </div>
                        </Row>
                        <Row className='justify-content-center'>
                            <div className="row align-items-start">
                                <div className="col-10">
                                    Cubrir el mercado nacional e internacional con una solución que sirva de apoyo a la toma de decisiones en empresas orientadas a procesos de tratamiento de materiales reciclables.
                            </div>
                            </div>
                        </Row>
                    </Col>
                    <br /><br />
                    <Col sm={'1'} md={'4'}>
                        <Row>
                            <div className="row align-items-start padding-responsive-valores">
                                <div className="col-12">
                                    <h3 className="colorPrincipal">Valores</h3>
                                </div>
                            </div>
                        </Row>
                        <Row className='justify-content-center'>
                            <div className="row align-items-start">
                                <div className="col-12">
                                    - Uso incesante del ingenio.
                            </div>
                                <div className="col-12">
                                    - Pasión por la tecnología.
                            </div>
                                <div className="col-12">
                                    - Amantes del medio ambiente.
                            </div>
                            </div>
                        </Row>
                        <br /><br />
                        <Row>
                            <div className="row align-items-start">
                                <div className="col-12">
                                    <h3 className="colorPrincipal">Compromiso</h3>
                                </div>
                            </div>
                        </Row>
                        <Row className='justify-content-center'>
                            <div className="row align-items-start">
                                <div className="col-10">
                                    Entendemos que somos parte de un ecosistema y todos somos responsables de mejorar nuestro medio ambiente... por eso somos "BE FREE and BE GREEN."
                            </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default WhoWeAre;