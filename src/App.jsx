import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-wrapper";
import Footer from "./components/Footer";

import Blank from "./components/Blank";
import Grid from "./components/Grid";
import Profile from "./components/Customer/Profile";
import loadingAnim from "./images/loading.gif";

//TODO Web Template Studio: Add routes for your new pages here.
function App() {
  const { loading } = useAuth0();


    if (loading) {
      return (
          <img className="pageLoader" src={loadingAnim} alt="loading"/>

      );
    }

    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Redirect exact path = "/" to = "/Blank" />
          <Route path = "/Blank" component = { Blank } />
          <Route path = "/Grid" component = { Grid } />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
    
  }

export default App;
