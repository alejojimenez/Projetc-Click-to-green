import React from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";

const Suggestions = () => {
    return (
        <>
            <Container fluid>
                <Row className='text-center pt-5'>
                    <h3 className="colorPrincipal" style={{ width: '100%', height: '120px' }}>SUGERENCIAS</h3>
                </Row>
                <Row >
                    <Col md='2'></Col>
                    <Col md='4' className='text-justify'>
                        <p>Para <strong>Click to Green</strong> es muy importante tu opinión, por eso nos preocupamos de habilitar este espacio para que nos entregues tu feedback. Recuerda que todo lo que nos puedas decir es de suma importancia, por lo que siéntete libre de expresarte.</p>
                        <h5>Se libre, se Green!</h5>
                    </Col>

                    <Col sm='1' md='4'>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="text" placeholder="Nombre" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Control type="text" placeholder="Apellido" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridEnail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder="Comentarios" rows={3} />
                            </Form.Group>

                            <Button className="fondoColorSecundario" style={{ width: '150px' }} type="submit">
                                Enviar
                        </Button>
                        </Form>
                    </Col>
                    <Col md='2'></Col>
                </Row>
            </Container>
        </>
    )
}

export default Suggestions;
