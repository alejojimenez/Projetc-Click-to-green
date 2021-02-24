import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Col, Row, Button, Form, Table, Modal } from "react-bootstrap";
import ModalRootOperator from '../components/ModalRootOperator';

const RootOperator = () => {
    const { store, actions } = useContext(Context);
    const [modalShow, setModalShow] = useState(false);
    const handleClick = (index) => {
        setModalShow(true)
        actions.editContainer(index)
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div>
                <div className="containers">
                    <Row className='text-center py-5'>
                        <Col>
                            <h3 className="colorPrincipal text-center titlePago"><Col>OPERADORES DE RUTA</Col></h3>
                        </Col>
                    </Row>
                    <Row className="line mb-3">
                        <Col className='text-center colorPrincipal'>
                            <h6>Nombre del operador</h6>
                        </Col>
                        <Col className='text-center colorPrincipal'>
                            <h6>Correo del operador</h6>
                        </Col>
                        <Col className='text-center colorPrincipal'>
                            <h6>Número del operador</h6>
                        </Col>
                        <Col className='text-center colorPrincipal'>
                        </Col>
                    </Row>
                    <Form onSubmit={(e) => actions.addOperator(e)}>
                        <Form.Row>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="Nombre del operador" className="inputForm" id="username" name="username"
                                        defaultValue={store.username} onChange={(e) => actions.handleChange(e)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="Correo" className="inputForm" id="emailO" name="emailO"
                                        defaultValue={store.emailO} onChange={actions.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="Numero telefonico" className="inputForm" id="telefono" name="telefono"
                                        defaultValue={store.telefono} onChange={actions.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button type="submit" className="fondoColorSecundario float-right">Crear</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
                <div className="containers2">
                    <Row className='text-center py-5'>
                        <Col>
                            <h4 className="colorPrincipal text-center titleListContainers"><Col>LISTA DE OPERADORES</Col></h4>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Table className='text-center colorPrincipal' striped bordered hover size="sm">
                            <thead className="text-center">
                                <tr>
                                    <th>Operador</th>
                                    <th>Correo</th>
                                    <th>Número</th>
                                    <th>Fecha</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    store.operator !== undefined ?
                                        (
                                            store.operator.map((item, index) => {
                                                return (
                                                    <>
                                                        <tr className="colorSecundario" key={index} data={item}>
                                                            <td>{item.username}</td>
                                                            <td>{item.emailO}</td>
                                                            <td>{item.telefono}</td>
                                                            <td>{item.registerDate}</td>
                                                            <td>
                                                                <Button className="fondoColorSecundario mr-4" onClick={() => { handleClick(index) }}>
                                                                    Editar
                                                                </Button>
                                                                <Button type="submit" className="bg-danger" onClick={() => {
                                                                    handleShow()
                                                                }}>Eliminar</Button>
                                                                <Modal show={show} onHide={handleClose}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Eliminar</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>¿Estás seguro de que quieres eliminar el operador?</Modal.Body>
                                                                    <Modal.Footer>
                                                                        <Button variant="secondary" onClick={handleClose}>
                                                                            No eliminar
                                                                        </Button>
                                                                        <Button variant="danger" onClick={() => {
                                                                            handleClose(); actions.deleteOperator(index, item.userId);
                                                                        }}>
                                                                            Eliminar
                                                                        </Button>
                                                                    </Modal.Footer>
                                                                </Modal>
                                                            </td>
                                                        </tr>
                                                        <ModalRootOperator
                                                            show={modalShow}
                                                            onHide={() => setModalShow(false)}
                                                        />
                                                    </>
                                                )
                                            })
                                        )
                                        :
                                        (
                                            <h1>Loading</h1>
                                        )
                                }
                            </tbody>
                        </Table>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default RootOperator;