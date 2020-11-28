import React from "react";
import { Row } from "react-bootstrap";

const WhoWeAre = () => {
    return(
        <>
        <Row className='text-center pt-5'>
        <h3 className="colorPrincipal" style={{ width: '100%', height: '120px' }}>QUIENES SOMOS</h3>
        </Row>    
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <strong> Nuestra Misión</strong>
                    </div>
                    <div className="col">
                        <strong> Valores Corporativos</strong>
                    </div>
                    <div className="col">
                    <strong> Compromiso con la Comunidad</strong>
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col">
                         Ser la empresa lider, en tecnología aplicada en empresas que son parte de la cadena de valor en los procesos de tratamiento de materiales reciclables.
                    </div>
                    <div className="col">
                         El uso de incesante del ingenio, apoyado por nuestra pasión por la tecnología-
                    </div>
                    <div className="col">
                         Entendemos que somos parte de un ecosistema, y todos somos responsables de mejorar nuestro medio ambiente... por eso "BE FREE and BE GREEN"
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoWeAre
