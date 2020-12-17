import React, { useContext } from "react";
import { Context } from './store/appContext';
import injectContext from './store/appContext';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from "./firebase";


// SECCIONES 
import Home from "./views/Home";
import NavBarTop from "./components/NavBarTop"
//import HomeApp from "./views/HomeApp";
// import NavBarSide from "./components/NavBarSideOld";
// import Suggestions from './views/Suggestions'
import PayMethod from "./views/PayMethod";
import WhoWeAre from "./views/WhoWeAre";
import Contact from "./views/Contact";
import Containers from "./views/Containers";
import Notifications from "./views/Notifications";
import SendNotify from "./views/SendNotify";
//import Signup from "./views/Signup";
import Login from "./views/Login"



function App() {
  const { store } = useContext(Context);
  const [firebaseUser, setFirebaseUser] = React.useState(false);


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
      <div className="container mt-3">
        <NavBarTop />
        <Switch>
          <Route component={Login} path="/login"/>
          <Route path="/home" component={Home} exact></Route>
          <RutaPrivada path="/contenedores" component={Containers}></RutaPrivada>
          <RutaPrivada path="/notificaciones" component={Notifications}></RutaPrivada>
          <Route exact path="/quienes-somos" component={WhoWeAre} />
          <Route exact path="/planes-de-pago" component={PayMethod} />
          <Route exact path="/contactanos" component={Contact} />
          <Route exact path="/enviar-notificacion" component={SendNotify} />
        </Switch>
      </div>
    </Router>
  ) : (
    <div>Cargando...</div>
  );
}


export default injectContext(App);
