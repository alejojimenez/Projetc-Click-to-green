import React from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";
import "../styles/StyleContact.css";
import emailjs from 'emailjs-com';

const Suggestions = () => {
    function sendEmail(e) {
        e.preventDefault();
            emailjs.sendForm('service_mafdn89', 'templateContactForm_01', e.target, 'user_1cESTGzd40ScOqgieGujH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        }

    return (
        <>
            <Container className = "style-container-contact" fluid>
                <Row className='position-title-contact justify-content-center'>
                    <h2 className="colorPrincipal">CONTACTANOS</h2>
                </Row>
                <br />
                <Row className='justify-content-center'>
                    <Col sm='1' md='6'>
                        <Form md={'6'} onSubmit={sendEmail}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="text" placeholder="Nombre" name="first"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Control type="text" placeholder="Apellido" name="last"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridEnail">
                                <Form.Control type="email" placeholder="Email" name="email"/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder="Comentarios" rows={3} name="message"/>
                            </Form.Group>

                            <Button className="fondoColorSecundario" style={{ width: '150px' }} value="Send" type="submit">
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
