import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import List from "./components/List.jsx";
import Form from "./components/Form.jsx";
import axios from "axios";
import { Navbar } from "react-bootstrap";

function App() {
  //   async function test() {
  //     let req = axios.get("http://localhost:5000/api/v1/restaurants/1");
  //     let res = await req;
  //     let data = res.data;
  //     console.log(data);
  //   }
  //   test();

  return (
    <div className="App wrapper">
      <header>
        <h3>Spicy life ❤️‍🔥</h3>
      </header>
      {/* <div className="container"> */}
      <Nav />
      <List />
      <Form />
      {/* </div> */}
      <Navbar bg="light">
        <Navbar.Brand className="footer_logo">
          <img
            src="logo__14_-removebg-preview.png"
            width="100"
            height="auto"
            alt="bestipython logo"
          />
        </Navbar.Brand>
      </Navbar>
      <footer>Code Chrysalis 🐍🐍🐍</footer>
    </div>
  );
}

export default App;
