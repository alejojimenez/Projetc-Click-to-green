import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import parqueBicentenario from "../img/parque-bicentenario.jpg"
import "../styles/StylePayMethods.css";

const PayMethod = () => {
    return (
        <>
        <Container className='style-container-pay-methods' fluid>
            <Row className='justify-content-center'>
                <Col sm={'1'} md={'6'} lg={'6'}>
                    <img className="style-img-pay-methods" src={parqueBicentenario} alt="Parque Bicentenario" />
                    <span className = "text-pay-methods-Image" >ELIGENOS PARA UN MEJOR FUTURO</span>
                </Col>
                <Col sm={'1'} md={'6'} lg={'6'}>
                    <Row className='position-title-pay-methods justify-content-center'>
                        <h2 className="colorPrincipal text-center">PLANES DE PAGO</h2>
                    </Row>
                    <br />
                    <Row className='justify-content-center'>
                        <Col sm={1} md={4} lg={4}>
                            <Card className="size-card-pay-method fondoColorSecundario">
                                <Card.Body>
                                    <Card.Title className="text-center text-light">19.990</Card.Title>
                                    <Card.Text className="text-center text-light">
                                        CLP
                                    </Card.Text>
                                    <Card.Title className="text-light">Plan Mensual</Card.Title>
                                    <Card.Text className="text-light">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                                    </Card.Text>
                                    <Button className="fondoColorPrincipal m-auto">Tu eliges</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={1} md={4} lg={4}>
                            <Card className="size-card-pay-method fondoColorPrincipal">
                                <Card.Body>
                                    <Card.Title className="text-center text-light">29.990</Card.Title>
                                    <Card.Text className="text-center text-light">
                                        CLP
                                    </Card.Text>
                                    <Card.Title className="text-light">Plan Semestral</Card.Title>
                                    <Card.Text className="text-light">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                                    </Card.Text>
                                    <Button className="fondoColorSecundario m-auto">Tu eliges</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={1} md={4} lg={4}>
                            <Card className="size-card-pay-method fondoColorSecundario">
                                <Card.Body>
                                    <Card.Title className="text-center text-light">39.990</Card.Title>
                                    <Card.Text className="text-center text-light">
                                        CLP
                                    </Card.Text>
                                    <Card.Title className="text-light">Plan Anual</Card.Title>
                                    <Card.Text className="text-light">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
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