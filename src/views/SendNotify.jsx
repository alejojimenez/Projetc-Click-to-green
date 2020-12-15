import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Button } from 'react-bootstrap';
import "../styles/StyleNotify.css";

const SendNotify = () => {
    const { store, actions } = useContext(Context);

    const timeOut = setTimeout(() => {
        window.location = 'http://localhost:3000';
    }, 5000);
    
    // function myRedirect() {
    //     setTimeout(function () {
    //         window.location = 'http://localhost:3000';
    //     }, 1000);
    // }
    
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
                        ? <h3 className="text-send-notify align-items-center justify-content-center" timeOut>{store.currentNotify} ¡Gracias!</h3>
                        : ""
                    }
                </div>
            </div>
        </>
    )
}

export default SendNotify;