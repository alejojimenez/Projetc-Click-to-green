import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./styles/custom.scss";
import './styles/StyleNavbar.css';
import "./styles/StylesMP.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarTop from "./components/NavBarTop"
import Suggestions from './views/Suggestions'
import PayMethod from "./views/PayMethod"

function App() {
  return (
    <>
      <NavBarTop />
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={PayMethod} />
            {/* <Route exact path="/Details/:name" component={Details} />
                <Route exact path="/Details-Planets/:name" component={DetailsPlanets} /> */}
            <Route render={() => <h1>ERROR 404</h1>} />
          </Switch>
          <Suggestions />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
