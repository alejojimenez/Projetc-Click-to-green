import React, { useContext, useState } from "react";
import { Context } from "../store/appContext"
import { Modal, Button, Col, Form } from 'react-bootstrap'

const ModalContainer = (props) => {
    const { store, actions } = useContext(Context);
    const [container, setContainer] = useState({
        typeOfMaterial: '',
        capacity: '',
        location: '',
        length: '',
        latitude: '',
    })
    const handleChange = e => {
        e.preventDefault()
        setContainer({
            ...container,
            [e.target.name]: e.target.value,
        })
    }


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
                <>
                    <Form onSubmit={e => actions.updateContainer(e, container)}>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col} controlId="typeOfMaterial">
                                    <Form.Control type="text" className="inputForm" id="typeOfMaterial" name="typeOfMaterial"
                                        placeholder={store.editContainer.typeOfMaterial} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="capacity">
                                    <Form.Control type="text" className="inputForm" id="capacity" name="capacity"
                                        placeholder={store.editContainer.capacity} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="location">
                                    <Form.Control type="text" className="inputForm" id="location" name="location"
                                        placeholder={store.editContainer.location} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="length">
                                    <Form.Control type="text" className="inputForm" id="length" name="length"
                                        placeholder={store.editContainer.length} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="latitude">
                                    <Form.Control type="text" className="inputForm" id="latitude" name="latitude"
                                        placeholder={store.editContainer.latitude} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button type="submit" className="fondoColorSecundario float-right" onClick={() => {
                                    actions.updateContainer()
                                }}>Actualizar</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalContainer;
