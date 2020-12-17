import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import parqueBicentenario from "../img/parque-bicentenario.jpg";
import "../styles/StylePayMethods.css";
// import { Context } from "../store/appContext";
import { useDispatch, useSelector } from "react-redux";
import { ingresoUsuarioAccion } from "../store/userSign";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch();

  const loading = useSelector((store) => store.usuario.loading);
  const activo = useSelector((store) => store.usuario.activo);
  console.log(activo);

  useEffect(() => {
    // console.log(activo)
    if (activo) {
      props.history.push("/");
    }
  }, []);

  return (
    <>
      <Container className="style-container-pay-methods" fluid>
        <Row className="justify-content-center">
          <Col sm={"1"} md={"6"} lg={"6"}>
            <Row className="position-title-pay-methods justify-content-center">
              <h2 className="colorPrincipal text-center">BIENVENIDO</h2>
            </Row>
            <br />
            <Col>
              <h3>Ingreso con Google</h3>
              <hr />
              <button
                className="btn btn-dark"
                onClick={() => dispatch(ingresoUsuarioAccion())}
                disabled={loading}
              >
                Acceder
              </button>
            </Col>
          </Col>
          <Col sm={"1"} md={"6"} lg={"6"}>
            <img
              className="style-img-pay-methods"
              src={parqueBicentenario}
              alt="Parque Bicentenario"
            />
            <span className="text-pay-methods-Image">
              ELIGENOS PARA UN MEJOR FUTURO
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(Login);
