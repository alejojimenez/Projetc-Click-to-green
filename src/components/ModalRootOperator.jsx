import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Modal, Button, Col, Form } from 'react-bootstrap';

const ModalRootOperator = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    const [operator, setOperator] = useState({
        username: '',
        emailO: '',
        telefono: ''
    })
    const handleChange = (e) => {
        e.preventDefault()
        setOperator({
            ...operator,
            [e.target.name]: e.target.value,
        })
    }

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
                    <Form onSubmit={(e) => { actions.updateOperator(e, operator); props.onHide() }}>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" className="inputForm" id="username" name="username"
                                        placeholder={store.editOperator.username} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" className="inputForm" id="emailO" name="emailO"
                                        placeholder={store.editOperator.emailO} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" className="inputForm" id="telefono" name="telefono"
                                        placeholder={store.editOperator.telefono} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button type="submit" className="fondoColorSecundario float-right" >Actualizar</Button>
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

export default ModalRootOperator;
