import React from 'react';
import injectContext from './store/appContext';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import injectContext from "./store/appContext";


// SECCIONES 
import Home from "./views/Home";
import NavBarTop from "./components/NavBarTop"
// import Suggestions from './views/Suggestions'
// import PayMethod from "./views/PayMethod";
// import WhoWeAre from "./views/WhoWeAre";
import SendNotify from "./views/SendNotify";
import Notifications from "./views/Notifications";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavBarTop />
          <Switch>
              <Route exact path='/enviar-notificacion' render={() => <SendNotify />} />
              <Route exact path='/notificaciones' render={() => <Notifications />} />
              {/* <Route exact path="/notificacion" component={Notify} /> */}
              {/* <Route exact path="/notificacion" component={Notify} /> */}
            {/* Nuevos Accessos
              <Route exact path="/login" component={Login} />          
              <Route exact path="/registro" component={Register} />
            */}
            {/* viejos accesos
              {/* <Route exact path="/" component={Home} />
              {/* <Route exact path="/planes-de-pago" component={PayMethod} />
              {/*<Route exact path="/quienes-somos" component={WhoWeAre} />
              {/*<Route exact path="/contactanos" component={Contact} />
              {/*<Route component={Notify} />
              {/* <Route component={NotFound} /> 
            */}
          </Switch>

          <Home />
        </div>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
