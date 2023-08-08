import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { render } from "@testing-library/react";

import Home from "/home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* {<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          component
             </a>} */}
        <Home />
      </header>
    </div>
  );
}

export default App;
