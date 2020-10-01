import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import List from "./components/List.jsx";
import Form from "./components/Form.jsx";
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
    <div className="App wrapper">
      <header>My favorite curry restaurants</header>
      {/* <div className="container"> */}
      <Nav />
      <List />
      <Form />
      {/* </div> */}
      <footer>BestiPython</footer>
    </div>
  );
}

export default App;
