import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import List from "./components/List/List";
import Map from "./components/Map/Map";
// import Form from "./components/Form/Form";
import { Navbar } from "react-bootstrap";

export default function App() {

  return (
    <div className="App wrapper">
      <header>
        <h3>Spicy life ❤️‍🔥</h3>
        <Nav />
      </header>
      <List />
      <Map />
      {/* <Form /> */}

      {/* <Navbar bg="light">
        <Navbar.Brand className="footer_logo">
          <img
            src="logo__14_-removebg-preview.png"
            width="100"
            height="auto"
            alt="bestipython logo"
          />
        </Navbar.Brand>
      </Navbar> */}
      <footer>Code Chrysalis 🐍🐍🐍</footer>
    </div>
  );
}

