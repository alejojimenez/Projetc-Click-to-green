import React from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";
import "../styles/StyleContact.css";

const Suggestions = () => {
    return (
        <>
            <Container className = "style-container-contact" fluid>
                <Row className='position-title-contact justify-content-center'>
                    <h2 className="colorPrincipal">CONTACTANOS</h2>
                </Row>
                <br />
                <Row className='justify-content-center'>
                    <Col sm='1' md='6'>
                        <Form md={'6'}>
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
                </Row>
            </Container>
        </>
    )
}

export default Suggestions;
