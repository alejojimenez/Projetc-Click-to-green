import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./styles/custom.scss";
import './styles/StyleNavbar.css';
import "./styles/StylesMP.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// SECCIONES 
import Home from "./views/Home";
import NavBarTop from "./components/NavBarTop"
// import Suggestions from './views/Suggestions'
// import PayMethod from "./views/PayMethod";
// import WhoWeAre from "./views/WhoWeAre";
// import Notify from "./views/Notify";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavBarTop />
          <Switch>
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

export default App;
