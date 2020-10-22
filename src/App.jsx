import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
// import List from "./components/List/List";
// import Form from "./components/Form/Form";
import axios from "axios";
import { Navbar } from "react-bootstrap";

function App() {

  return (
    <div className="App wrapper">
      <header>
        <h3>Spicy life ❤️‍🔥</h3>
      </header>
      <div className="container">
      <Nav />
      {/* <List />
      <Form /> */}
      </div>
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
