import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  async function test() {
    let req = axios.get("http://localhost:5000/api/v1/restaurants/1");
    let res = await req;
    let data = res.data;
    console.log(data);
  }
  test();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
