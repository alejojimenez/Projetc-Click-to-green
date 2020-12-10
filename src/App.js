import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import injectContext from "./store/appContext";


// SECCIONES 
import Home from "./views/Home";
import Suggestions from './views/Suggestions';
import PayMethod from "./views/PayMethod";
import Containers from "./views/Containers";

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
          <Containers />
          <Suggestions />

        </div>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
