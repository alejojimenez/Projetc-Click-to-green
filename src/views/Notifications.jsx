import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Col, Row, Table, Container } from "react-bootstrap";
import ModalNotifications from '../components/ModalNotifications';

const Notifications = () => {
    const { store, actions } = useContext(Context);
    console.log('Entrando a Notificaciones', store.notifications);
    useEffect ( () => {
        actions.getNotifications()
    }, [])
 
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <Container>
            <div className="containers-notificatios">
                <div className="notifications">
                    <Row className='text-center py-5'>
                        <Col>
                            <h3 className="colorPrincipal text-center titlePago"><Col>NOTIFICACIONES</Col></h3>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <br />
                        <Table className='text-center colorPrincipal' striped bordered hover size="sm">
                            <thead className = "text-center">
                                <tr>
                                    <th>Fecha y Hora</th>
                                    <th>Compañia</th>
                                    <th>Contenedor</th>
                                    <th>Ubicación</th>
                                    <th>Estatus</th>
                                    <th>Notificado</th>
                                    <th>Asignado</th>                                    
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody className = "text-center">
                                {console.log("Construyendo Tabla", store.notifications)}
                                { store.notifications.map((item, index) => {
                                    return (
                                        <tr className = "colorSecundario" key={index}>
                                            <td>{item.notificationDate}</td>
                                            <td>{}</td>
                                            <td>{}</td>
                                            <td>{}</td>
                                            <td>{item.status}</td>
                                            <td>{item.notify}</td>
                                            <td>{}</td>                                            
                                            <td>
                                                <ModalNotifications 
                                                    hideModal={() => setIsOpen(false)}
                                                />                                                       
                                            </td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>                                
                    </Row>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Notifications;