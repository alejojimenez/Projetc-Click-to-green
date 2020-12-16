import React, { useContext } from "react";
import { Context } from './store/appContext';
import injectContext from './store/appContext';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

// SECCIONES 
import Home from "./views/Home";
import NavBarTop from "./components/NavBarTop"
import HomeApp from "./views/HomeApp";
// import NavBarSide from "./components/NavBarSideOld";
// import Suggestions from './views/Suggestions'
// import PayMethod from "./views/PayMethod";
// import WhoWeAre from "./views/WhoWeAre";
import Containers from "./views/Containers";
import Notifications from "./views/Notifications";
import Signup from "./views/Signup";
import Login from "./views/Login";

function App() {
  const { store } = useContext(Context);

  return (
    <>
      <BrowserRouter>
          <NavBarTop />
          <Switch>
              {/* <Route exact path='/enviar-notificacion' render={() => <SendNotify />} /> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/registro" component={Signup} />
              <Route exact path="/contenedores" component={Containers} />
              <Route exact path="/notificaciones" component={Notifications} />
            </Switch>
      </BrowserRouter>
      {console.log(store.currentUser)}
      {
        store.currentUser !== null ?
            (
              <>
                <HomeApp />
              </>
            )
            :
            <>
              <Home />
            </>
      }
      <Home />
    </>
  );
}

export default injectContext(App);
