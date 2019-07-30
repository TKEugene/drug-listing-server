import React from "react";
import {Router} from "@reach/router";
import NavBar from "./NavBar";
import Home from "./Home";
import DrugList from "./DrugList";
import ChemistList from "./ChemistList";
// import Admin from "./Admin"
import "./App.css";

function App() {
  return (
    <div className = "topnav">
      <header>
        <NavBar/>
      </header>

      <main className = "body">
        <Router>
          <Home path = "/Home" />
          <DrugList path = "/Drug" /> 
          <ChemistList path = "/Chemist" />
        </Router>
      </main>
    </div>
  )
}
export default App;
