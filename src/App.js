import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./styles/custom.scss";
import './styles/StyleNavbar.css';
import "./styles/StylesMP.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// SECCIONES 
import Home from "./views/Home";
import Suggestions from './views/Suggestions';
import PayMethod from "./views/PayMethod";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Home />
          <Switch>
            {/* <Route exact path="/" component={Home} />  */}
            <Route exact path="/planes-de-pago" component={PayMethod} />
            <Route exact path="/sugerencias" component={Suggestions} />
            {/* <Route render={() => <h1>ERROR 404</h1>} />  */}
          </Switch>
          <PayMethod />
          <Suggestions />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
