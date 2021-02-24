import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Button, Modal } from "react-bootstrap";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { DropdownButton, Dropdown } from "react-bootstrap";

const ModalNotifications = (props) => {
    const { store, actions } = useContext(Context);
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
        console.log(e);
        setValue(e)
    }

    useEffect(() => {
        actions.getUsers()
    }, [])

    console.log(props);
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
    <>
        <Button className="bt bg-success" onClick={showModal}>
            Asignar
        </Button>
        <Modal className="" show={isOpen} onHide={hideModal}>
            <ModalHeader>
                <ModalTitle className="text-center colorPrincipal">
                    Operador de Rutas
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div className="mb-2">
                    <DropdownButton
                        variant=''
                        drop='right'
                        title="- Seleccione: "
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                    >
                        {console.log("Construyendo lista", store.users)}
                        {store.users.map((item, index) => {
                        return (
                            <Dropdown.Item 
                                className="colorSecundario" 
                                key={index} 
                                eventKey={item.username}
                            >
                                {item.username} {'-'} {item.rol}
                            </Dropdown.Item>
                            )
                        })
                        }
                    </DropdownButton>
                    <p className="pt-4 pb-2">Operador Seleccionado:  <strong>{value}</strong></p>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button className="bt bg-success">Asignar Operador</Button>
                <Button className="bt bg-danger" onClick={hideModal}>
                    Cancelar
                </Button>
            </ModalFooter>
        </Modal>
    </>
    );
};

export default ModalNotifications;