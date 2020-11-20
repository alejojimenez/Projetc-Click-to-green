import React from "react";
import { Col, Row, Card, Button, Container, CardDeck } from "react-bootstrap";
import parqueBicentenario from "../img/parque-bicentenario.jpg"

const MetodosDePago = () => {
    return (
        <>
            <Container fluid>
                <Row className="d-inline text-center">
                </Row>
                <Row>
                    <Col sm={1} md={6} lg={6}>
                        <div className="w-100 h-100">
                            <img src={parqueBicentenario} style={{ width: '99%' }} alt="Parque Bicentenario" />
                        </div>
                    </Col>
                    <Col sm={1} md={6} lg={6}>
                        <h2 className="colorPrincipal text-center">PLANES DE PAGO</h2>
                        <CardDeck className="align-middle" style={{ marginTop: '15%' }}>
                            <Card className="fondoColorSecundario" style={{ width: '18rem' }}>
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
                            <Card className="fondoColorPrincipal" style={{ width: '18rem' }}>
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
                            <Card className="fondoColorSecundario" style={{ width: '18rem' }}>
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
            </Container>
        </>
    )
}

export default MetodosDePago;