import React from "react";
import "../style/Nav.css";
import { Navbar } from "react-bootstrap";

function Nav() {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand>
          <img
            src="/logo__13_-removebg-preview.png"
            width="500"
            height="auto"
            alt="bestipython logo"
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Nav;
