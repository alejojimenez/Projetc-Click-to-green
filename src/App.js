import React, { useState } from "react";
import injectContext from './store/appContext';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from "./firebase";

// SECCIONES
import Home from "./views/Home";
import NavBarTop from "./components/NavBarTop";
import PayMethod from "./views/PayMethod";
import WhoWeAre from "./views/WhoWeAre";
import Contact from "./views/Contact";
import Containers from "./views/Containers";
import Notifications from "./views/Notifications";
import RootOperator from "./views/RootOperator";
import ViewCompany from "./views/ViewCompany";
import SendNotify from "./views/SendNotify";
import Login from "./views/Login";
import FooterRRSS from "./components/FooterRRSS";

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
          setFirebaseUser(user);
        } else {
          setFirebaseUser(null);
        }
      });
    };
    fetchUser();
  }, []);

  const RutaPrivada = ({ component, path, ...rest }) => {
    if (localStorage.getItem("usuario")) {
      const usuarioStorage = JSON.parse(localStorage.getItem("usuario"));
      if (usuarioStorage.uid === firebaseUser.uid) {
        return <Route component={component} path={path} {...rest} />;
      } else {
        return <Redirect to="/login" {...rest} />;
      }
    } else {
      return <Redirect to="/login" {...rest} />;
    }
  };

  return firebaseUser !== false ? (
    <Router>
        <NavBarTop />
        <Switch>
          <Route component={Login} path="/login"/>
          <Route exact path="/home" component={Home}/>
          <Route path="/compania" component={ViewCompany}/>
          <Route path="/contenedores" component={Containers}/>
          <Route path="/notificaciones" component={Notifications}/>
          <Route path="/operadores" component={RootOperator}/>
          <Route exact path="/quienes-somos" component={WhoWeAre} />
          <Route exact path="/planes-de-pago" component={PayMethod} />
          <Route exact path="/contactanos" component={Contact} />
          <Route exact path="/enviar-notificacion" component={SendNotify} />
        </Switch>
      <FooterRRSS />
    </Router>
  ) : (
    <div>Cargando...</div>
  );
}

export default injectContext(App);