import React from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";
import parqueBicentenario from "../img/parque-bicentenario.jpg"

const MetodosDePago = () => {
    return (
        <>
            <Container fluid>
                <Row className="d-inline text-center">
                    <h2 className="colorPrincipal">PLANES DE PAGO</h2>
                </Row>
                <Row>
                    <Col>
                        <div className="w-25 h-50">
                            <img src={parqueBicentenario} style={{ width: '36rem' }} alt="Parque Bicentenario" />
                        </div>
                    </Col>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MetodosDePago;