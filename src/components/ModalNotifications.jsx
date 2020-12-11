import React from "react";
// import ReactDOM from "react-dom";
import { Button, Modal } from "react-bootstrap";
// import Button from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

const ModalNotifications = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
    <>
        <Button className="bt bg-success" onClick={showModal}>Asignar</Button>
        <Modal show={isOpen} onHide={hideModal}>
            <ModalHeader>
                <ModalTitle>Asignar Operador de Rutas</ModalTitle>
            </ModalHeader>
            <ModalBody>Seleccione</ModalBody>
            <ModalFooter>
                <Button className = "bt bg-success">Asignar</Button>
                <Button className = "bt bg-danger" onClick={hideModal}>Cancelar</Button>
            </ModalFooter>
        </Modal>
      </>
    );
};

export default ModalNotifications;