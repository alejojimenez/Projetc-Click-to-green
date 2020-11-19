import React from 'react';
import "./styles/custom.scss";
import './styles/StyleNavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarTop from "./components/NavBarTop"
import MetodosDePago from "./views/MetodosDePago"

function App() {
  return (
    <>
      <NavBarTop/>
      <MetodosDePago/>
    </>
  );
}

export default App;
