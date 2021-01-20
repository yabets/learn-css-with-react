import React from "react";
import AppContext from "./AppContext";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Packages from "./components/Packages";
import Customers from "./components/Customers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Sidenav from "./components/Sidenav";
import StartHosting from "./components/StartHosting";

function App() {
  const [state, setState] = React.useState({ modal: false, sidenav: false });
  const toggleModal = () => {
    setState(({ modal }) => ({
      ...state,
      modal: !modal,
    }));
  };
  const toggleSidenav = () => {
    console.log("togglesidenav");
    setState(({ sidenav }) => ({
      ...state,
      sidenav: !sidenav,
    }));
  };
  return (
    <AppContext.Provider value={{ ...state, toggleModal, toggleSidenav }}>
      <Router>
        <Modal />
        <Sidenav />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/packages">
            <Packages />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/start-hosting">
            <StartHosting />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
