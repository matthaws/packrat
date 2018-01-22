import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header/Header.jsx";
import Welcome from "./welcome/Welcome.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Welcome} />
      </Switch>
    </div>
  );
};

export default App;
