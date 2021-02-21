import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Dashboard from "./components/dashboard";
import Userprofile from "./components/userprofile";
import Form from "./components/form";
import Maps from "./components/map";
import Error from "./components/error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/userprofile" component={Userprofile} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/map" component={Maps} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
