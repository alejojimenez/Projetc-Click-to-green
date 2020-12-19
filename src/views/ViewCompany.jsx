import React, { useContext, useState } from "react";
import { Context } from "../store/appContext"
import { Button, Col, Row } from 'react-bootstrap'
import ModalCompany from '../components/ModalCompany';


const ViewCompany = () => {
    const { store, actions } = useContext(Context);

    const [modalShow, setModalShow] = useState(false);
    const handleClick = (index) => {
        setModalShow(true)
        actions.editCompany(index)
    };

    return (
        <>
            <div className="mb-5">
                <Row className='text-center py-5'>
                    <Col>
                        <h3 className="colorPrincipal text-center titlePago"><Col>DATOS DE LA EMPRESA</Col></h3>
                    </Col>
                </Row>
                <div className="fondoColorPrincipal containerCompany">
                    <Row className="mb-3">
                        {
                            store.company !== undefined ?
                                (
                                    store.company.map((item, index) => {
                                        return (
                                            <>
                                                <div key={index}>
                                                    <Row className="mx-3 mt-2 p-4">
                                                        <Col className="mb-4">
                                                            <h2 className="colorText">EMPRESA: {item.businessName}</h2>
                                                        </Col>
                                                    </Row>
                                                    <Row className="mx-3 p-4">
                                                        <Col lg={'4'} md={'4'} sm={'1'} className="mb-4">
                                                            <h5 className="colorText">Rut: {item.rut}</h5>
                                                        </Col>
                                                        <Col lg={'4'} md={'4'} sm={'1'} className="mb-4">
                                                            <h5 className="colorText">Correo: {item.email}</h5>
                                                        </Col>
                                                        <Col lg={'4'} md={'4'} sm={'1'} className="mb-4">
                                                            <h5 className="colorText">Teléfono 1: {item.phone1}</h5>
                                                        </Col>
                                                        <Col lg={'4'} md={'4'} sm={'1'} className="mb-4">
                                                            <h5 className="colorText">Teléfono 2: {item.phone1}</h5>
                                                        </Col>
                                                        <Col lg={'4'} md={'4'} sm={'1'} className="mb-4">
                                                            <h5 className="colorText">Dirección: {item.address}</h5>
                                                        </Col>
                                                        <Col lg={'4'} md={'4'} sm={'1'} className="mb-4">
                                                            <h5 className="colorText">Región: {item.regional}</h5>
                                                        </Col>
                                                        <Col lg={'4'} md={'4'} sm={'1'} className="mb-4">
                                                            <h5 className="colorText">Comuna: {item.commune}</h5>
                                                        </Col>
                                                    </Row>
                                                    <Row className="m-3 ">
                                                        <Col>
                                                            <Button className="fondoColorPrincipal mr-4" onClick={() => { handleClick(index) }}>
                                                                Actualizar
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                    <ModalCompany
                                                        show={modalShow}
                                                        onHide={() => setModalShow(false)}
                                                    />
                                                    {/* <Row className="m-3 ">
                                                        <Col>
                                                            <Button variant="danger" onClick={() => {
                                                                handleClose(); actions.deleteCompany(index, item.companyId);
                                                            }}>
                                                                Eliminar
                                                            </Button>
                                                        </Col>
                                                    </Row> */}
                                                </div>
                                            </>
                                        )
                                    })
                                )
                                :
                                (
                                    <h1>Loading</h1>
                                )
                        }
                    </Row>
                </div>
            </div>
        </>
    )
};

export default ViewCompany;