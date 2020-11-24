import React from "react";
import { Col, Row, Card, Button, CardDeck } from "react-bootstrap";
import parqueBicentenario from "../img/parque-bicentenario.jpg"

const PayMethod = () => {
    return (
        <>
            <Row className="d-inline text-center">
            </Row>
            <Row>
                <Col sm={1} md={5} lg={5}>
                    <div className="containerImg">
                        <h3 className="textImage">ELIGENOS PARA UN MEJOR FUTURO</h3>
                        <img src={parqueBicentenario} alt="Parque Bicentenario" className=" imgCover" />
                    </div>
                </Col>
                <Col sm={1} md={7} lg={7}>
                    <h2 className="colorPrincipal text-center titlePago">PLANES DE PAGO</h2>
                    <CardDeck className="align-middle CardDeck">
                        <Card className="fondoColorSecundario" style={{ width: '14rem', height: '30%', marginTop: '4rem' }}>
                            <Card.Body>
                                <Card.Title className="text-light">39.990 $ al mes</Card.Title>
                                <Card.Text className="text-light">
                                    al mes
                                </Card.Text>
                                <Card.Title className="text-light">Básico</Card.Title>
                                <Card.Text className="text-light">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                                </Card.Text>
                                <Button className="fondoColorPrincipal m-auto">Tu eliges</Button>
                            </Card.Body>
                        </Card>
                        <Card className="fondoColorPrincipal" style={{ width: '14rem', height: '30%' }}>
                            <Card.Body>
                                <Card.Title className="text-light">39.990 $ al mes</Card.Title>
                                <Card.Text className="text-light">
                                    al mes
                                </Card.Text>
                                <Card.Title className="text-light">Básico</Card.Title>
                                <Card.Text className="text-light">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                                </Card.Text>
                                <Button className="fondoColorSecundario m-auto">Tu eliges</Button>
                            </Card.Body>
                        </Card>
                        <Card className="fondoColorSecundario" style={{ width: '14rem', height: '30%', marginTop: '4rem' }}>
                            <Card.Body>
                                <Card.Title className="text-light">39.990 $ al mes</Card.Title>
                                <Card.Text className="text-light">
                                    al mes
                                </Card.Text>
                                <Card.Title className="text-light">Básico</Card.Title>
                                <Card.Text className="text-light">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                                </Card.Text>
                                <Button className="fondoColorPrincipal m-auto">Tu eliges</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </>
    )
}

export default PayMethod;