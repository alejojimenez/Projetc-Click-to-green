import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Button } from 'react-bootstrap';
import "../styles/StyleNotify.css";

const SendNotify = () => {
    const { store, actions } = useContext(Context);

    const timeOut = setTimeout(() => {
        window.location = 'http://192.168.1.125:3000/home';
    }, 25000);
    
    return (
        <>
            <div className="style-container-notify fluid">
                <div className="style-img-notify d-flex flex-column align-items-center justify-content-center">
                    <h3 className="text-welcome-notify">Bienvenido</h3>
                    <Button type="button" className="btn fondoColorPrincipal" size="lg" onClick={(evento) => actions.onClickSendNotify(evento)}>
                        Enviar Notificación
                    </Button>
                    {console.log("Componente Despues del Click", store.currentNotify)}
                    {store.currentNotify !== ""
                        ? <h3 className="text-send-notify align-items-center justify-content-center">{store.currentNotify}¡Gracias!     Será atendida a la brevedad posible</h3>
                        : ""
                    }
                    {timeOut}
                </div>
            </div>
        </>
    )
}

export default SendNotify;