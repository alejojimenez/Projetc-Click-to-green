import React, { useContext } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
} from "react-bootstrap";
import parqueBicentenario from "../img/parque-bicentenario.jpg";
import "../styles/StylePayMethods.css";
import { Context } from "../store/appContext";

const Login = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <Container className="style-container-pay-methods" fluid>
        <Row className="justify-content-center">
          <Col sm={"1"} md={"6"} lg={"6"}>
            <Row className="position-title-pay-methods justify-content-center">
              <h2 className="colorPrincipal text-center">BIENVENIDO</h2>
            </Row>
            <br />
            <Form onSubmit={(evento) => actions.onSubmitLogin(evento)}>
              <Row className="justify-content-center">
                <Col sm={1} md={7} lg={7}>
                  <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Correo"
                    name="email"
                    onChange={(evento) => actions.onChangeUserLogin(evento)}
                    value={store.user_login.email}
                  />
                </Col>
                <Col sm={1} md={7} lg={7}>
                  <input
                    type="password"
                    className="form-control mb-4"
                    placeholder="Contraseña"
                    name="password"
                    onChange={(evento) => actions.onChangeUserLogin(evento)}
                    value={store.user_login.password}
                  />
                </Col>
                <Col sm={1} md={7} lg={7}>
                  <Button type="submit" variant="success">
                    Iniciar sesión
                  </Button>
                </Col>
              </Row>
            </Form>
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

export default Login;
