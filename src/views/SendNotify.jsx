import React, { useContext } from 'react';
import { Context } from '../store/appContext'
import { Button } from 'react-bootstrap';
import "../styles/StyleNotify.css";

const SendNotify = () => {
    const { actions } = useContext(Context);

    return (
        <>
            <div className="style-container-notify fluid">
                <div className="style-img-notify d-flex flex-column align-items-center justify-content-center">
                    <Button className="btn fondoColorPrincipal" size="lg" onClick={(evento) => actions.onClickSendNotify(evento)}>
                        Enviar Notificación
                    </Button>
                </div>
            </div>
        </>
    )
}

export default SendNotify;