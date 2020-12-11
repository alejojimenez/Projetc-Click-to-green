import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Button, Modal } from "react-bootstrap";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

const ModalNotifications = () => {
    const { store, actions } = useContext(Context);

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
    <>
        <Button className = "bt bg-success" onClick={showModal}>Asignar</Button>
        <Modal className = "" show={isOpen} onHide={hideModal}>
            <ModalHeader>
                <ModalTitle className = "text-center colorPrincipal">Operador de Rutas</ModalTitle>
            </ModalHeader>
            <ModalBody>Seleccione</ModalBody>
            <ModalFooter>
                <Button className = "bt bg-success">Asignar Operador</Button>
                <Button className = "bt bg-danger" onClick={hideModal}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    </>
    );
};

export default ModalNotifications;