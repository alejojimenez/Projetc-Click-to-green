import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { Col, Row, Button, Form, Table } from "react-bootstrap";
import ModalContainer from '../components/ModalContainer'

const Containers = () => {
    const { store, actions } = useContext(Context);
    const [modalShow, setModalShow] = React.useState(false);
    // console.log('prueba 1', store.container)

    return (
        <>
            <div className="containersAll">
                <div className="containers">
                    <Row className='text-center py-5'>
                        <Col>
                            <h3 className="colorPrincipal text-center titlePago"><Col>CONTENEDORES</Col></h3>
                        </Col>
                    </Row>
                    <Row className="line mb-3">
                        <Col className='text-center colorPrincipal'>
                            <h6>Tipo de material</h6>
                        </Col>
                        <Col className='text-center colorPrincipal'>
                            <h6>Capacidad</h6>
                        </Col>
                        <Col className='text-center colorPrincipal'>
                            <h6>Locación</h6>
                        </Col>
                        <Col className='text-center colorPrincipal'>
                            <h6>Longitud</h6>
                        </Col>
                        <Col className='text-center colorPrincipal'>
                            <h6>Latitud</h6>
                        </Col>
                        <Col className='text-center colorPrincipal'>
                        </Col>
                    </Row>
                    <Form onSubmit={e => actions.addContainer(e)}>
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
                                <Button type="submit" className="fondoColorSecundario float-right">Crear</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
                <div className="containers2">
                    <Row className='text-center py-5'>
                        <Col>
                            <h4 className="colorPrincipal text-center titleListContainers"><Col>LISTA DE CONTENEDORES</Col></h4>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Table className='text-center colorPrincipal' striped bordered hover size="sm">
                            <thead className="text-center">
                                <tr>
                                    <th>Tipo de material</th>
                                    <th>Capacidad</th>
                                    <th>Locación</th>
                                    <th>Longitud</th>
                                    <th>Latitud</th>
                                    <th>Fecha</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    store.container !== undefined ?
                                        (
                                            store.container.map((item, index) => {
                                                return (
                                                    <>
                                                        <tr className="colorSecundario" key={index} data={item}>
                                                            <td>{item.typeOfMaterial}</td>
                                                            <td>{item.capacity}</td>
                                                            <td>{item.location}</td>
                                                            <td>{item.length}</td>
                                                            <td>{item.latitude}</td>
                                                            <td>{item.registerDate}</td>
                                                            <td>
                                                                <Button className="fondoColorSecundario mr-4" onClick={() => setModalShow(true)}>
                                                                    Editar
                                                                    </Button>
                                                                <Button type="submit" className="bg-danger" onClick={() => {
                                                                    actions.deleteContainer(index, item.containerId)
                                                                }}>Eliminar</Button>
                                                            </td>
                                                        </tr>
                                                        <ModalContainer
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

export default Containers;