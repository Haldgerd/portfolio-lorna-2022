import React from "react";
import logo from "./logo.svg";
import "./app.css";

const name: string = "I AM LORNA";

function App() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{name}</h1>
    </header>
  );
}

export default App;
