import React, { useContext, useState } from "react";
import { Context } from "../store/appContext"
import { Modal, Button, Col, Form } from 'react-bootstrap'

const ModalContainer = (props) => {
    const { store, actions } = useContext(Context);
    const { idContainer, getIdContainer } = useState([]);
    // console.log('prueba 1', store.container)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Actualiza los datos
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                { }
                <Form onSubmit={e => actions.updateContainer(e)}>
                    <Form.Row>
                        <Col>
                            <Form.Group as={Col} controlId="typeOfMaterial">
                                <Form.Control type="text" placeholder="Tipo de material" className="inputForm" id="typeOfMaterial" name="typeOfMaterial"
                                    value={store.typeOfMaterial} onChange={actions.handleChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col} controlId="capacity">
                                <Form.Control type="text" placeholder="Capacidad" className="inputForm" id="capacity" name="capacity"
                                    value={store.capacity} onChange={actions.handleChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col} controlId="location">
                                <Form.Control type="text" placeholder="Locación" className="inputForm" id="location" name="location"
                                    value={store.location} onChange={actions.handleChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col} controlId="length">
                                <Form.Control type="text" placeholder="Longitud" className="inputForm" id="length" name="length"
                                    value={store.length} onChange={actions.handleChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col} controlId="latitude">
                                <Form.Control type="text" placeholder="Latitud" className="inputForm" id="latitude" name="latitude"
                                    value={store.latitude} onChange={actions.handleChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button type="submit" className="fondoColorSecundario float-right">Actualizar</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalContainer;
