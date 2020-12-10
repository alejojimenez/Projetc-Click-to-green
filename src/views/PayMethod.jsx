import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import parqueBicentenario from "../img/parque-bicentenario.jpg"

const PayMethod = () => {
    return (
        <>
            <div className="backgroundP">
                <Row className="d-inline text-center">
                </Row>
                <Row>
                    <Col lg={5} md={5} sm={1}>
                        <div className="containerImg">
                            <h3 className="textImage">ELIGENOS PARA UN MEJOR FUTURO</h3>
                            <img src={parqueBicentenario} alt="Parque Bicentenario" className=" imgCover" />
                        </div>
                    </Col>
                    <Col lg={7} md={7} sm={1}>
                        <h2 className="colorPrincipal text-center titlePago">PLANES DE PAGO</h2>
                        <Row className="align-middle CardDeck">
                            <Col>
                                <Card className="fondoColorSecundario card1">
                                    <Card.Body>
                                        <Card.Title className="text-light text-center">39.990 $ al mes</Card.Title>
                                        <Card.Text className="text-light text-center">al mes</Card.Text>
                                        <Card.Title className="text-light text-center">Básico</Card.Title>
                                        <Card.Text className="text-light text-center">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                                        </Card.Text>
                                        <Button className="fondoColorPrincipal btn-block">Tu eliges</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="fondoColorPrincipal card2">
                                    <Card.Body>
                                        <Card.Title className="text-light text-center">39.990 $ al mes</Card.Title>
                                        <Card.Text className="text-light text-center">al mes</Card.Text>
                                        <Card.Title className="text-light text-center">Básico</Card.Title>
                                        <Card.Text className="text-light text-center">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                                        </Card.Text>
                                        <Button className="fondoColorSecundario btn-block">Tu eliges</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="fondoColorSecundario card3">
                                    <Card.Body>
                                        <Card.Title className="text-light text-center">39.990 $ al mes</Card.Title>
                                        <Card.Text className="text-light text-center">al mes</Card.Text>
                                        <Card.Title className="text-light text-center">Básico</Card.Title>
                                        <Card.Text className="text-light text-center">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                                        </Card.Text>
                                        <Button className="fondoColorPrincipal btn-block">Tu eliges</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default PayMethod;