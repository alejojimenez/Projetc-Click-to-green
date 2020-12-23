import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import parqueBicentenario from "../img/parque-bicentenario.jpg"
import "../styles/StylePayMethods.css";

const PayMethod = () => {
    return (
        <>
            <Container className='style-container-pay-methods' fluid>
                <Row className='justify-content-center'>
                    <Col lg={'6'} md={'6'} sm={'1'}>
                        <img className="style-img-pay-methods" src={parqueBicentenario} alt="Parque Bicentenario" />
                        <span className="text-pay-methods-Image" >ELIGENOS PARA UN MEJOR FUTURO</span>
                    </Col>
                    <Col lg={'6'} md={'6'} sm={'1'}>
                        <Row className='position-title-pay-methods justify-content-center'>
                            <h2 className="colorPrincipal text-center">NUESTROS PLANES</h2>
                        </Row>
                        <br />
                        <Row className='justify-content-center'>
                            <Col sm={1} md={4} lg={4}>
                                <Card className="size-card-pay-method fondoColorSecundario">
                                    <Card.Body>
                                        <Card.Title className="text-center text-light">Valor Mensual</Card.Title>
                                        <Card.Text className="text-center text-light">
                                            <h3>UF 0.1</h3>
                                        </Card.Text>
                                        <Card.Title className="text-light">Plan Tester</Card.Title>
                                        <Card.Text className="text-light">
                                            Plan de prueba por un mes de cualquiera de los planes, bien sea Plasper y/o Glass.
                                        </Card.Text>
                                        <Button className="fondoColorPrincipal m-auto">Tu eliges</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={1} md={4} lg={4}>
                                <Card className="size-card-pay-method fondoColorPrincipal">
                                    <Card.Body>
                                        <Card.Title className="text-center text-light">Valor Mensual</Card.Title>
                                        <Card.Text className="text-center text-light">
                                            <h3>UF 0.5</h3>
                                        </Card.Text>
                                        <Card.Title className="text-light">Plan Plasper</Card.Title>
                                        <Card.Text className="text-light">
                                            Plan orientado a la recolección de residuos de reciclaje de Plastico y Papel. Tipo de Contrato Anual.
                                        </Card.Text>
                                        <Button className="fondoColorSecundario m-auto">Tu eliges</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={1} md={4} lg={4}>
                                <Card className="size-card-pay-method fondoColorSecundario">
                                    <Card.Body>
                                        <Card.Title className="text-center text-light">Valor Mensual</Card.Title>
                                        <Card.Text className="text-center text-light">
                                            <h3>UF 1.0</h3>
                                        </Card.Text>
                                        <Card.Title className="text-light">Plan Glass</Card.Title>
                                        <Card.Text className="text-light">
                                            Plan orientado a la recolección de residuos de reciclaje de vidro. Tipo de Contrato Anual.
                                        </Card.Text>
                                        <Button className="fondoColorPrincipal m-auto">Tu eliges</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PayMethod;