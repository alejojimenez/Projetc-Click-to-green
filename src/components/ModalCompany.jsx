import React, { useContext, useState } from "react";
import { Context } from "../store/appContext"
import { Modal, Button, Col, Form } from 'react-bootstrap'

const ModalCompany = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    const [company, setCompany] = useState({
        businessName: '',
        rut: '',
        email: '',
        phone1: '',
        phone2: '',
        address: '',
        regional: '',
        commune: ''
    })
    const handleChange = (e) => {
        e.preventDefault()
        setCompany({
            ...company,
            [e.target.name]: e.target.value,
        })
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Actualiza los datos
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <>
                    <Form onSubmit={(e) => actions.updateCompany(e, company)}>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="Nombre de la empresa" className="inputForm" id="businessName" name="businessName"
                                        defaultValue={store.company.businessName} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="Rut de la empresa" className="inputForm" id="rut" name="rut"
                                        defaultValue={store.company.rut} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="Correo" className="inputForm" id="email" name="email"
                                        defaultValue={store.company.email} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="Teléfono 1" className="inputForm" id="phone1" name="phone1"
                                        defaultValue={store.company.phone1} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="Teléfono 2" className="inputForm" id="phone2" name="phone2"
                                        defaultValue={store.company.phone2} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="Dirección" className="inputForm" id="address" name="address"
                                        defaultValue={store.company.address} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="Región" className="inputForm" id="regional" name="regional"
                                        defaultValue={store.company.regional} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="Comuna" className="inputForm" id="commune" name="commune"
                                        defaultValue={store.company.commune} onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Button type="submit" className="fondoColorPrincipal float-left" onClick={() => { handleShow() }}>Actualizar</Button>
                                {/* <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Actualizar</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>¿Estás seguro de querer actualizar los datos de la empresa?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            No
                                        </Button>
                                        <Button className="fondoColorSecundario" onClick={() => {
                                            handleClose();
                                        }}>
                                            Actualizar
                                        </Button>
                                    </Modal.Footer>
                                </Modal> */}
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

export default ModalCompany;
