import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/Planets">
          <Planets />
        </Route>
        <Route path="/people">
          <People />
        </Route>
      </Switch>
    </div>
  );
}
