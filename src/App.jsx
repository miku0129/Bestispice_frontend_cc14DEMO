import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import List from "./components/List/List";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";
// import Form from "./components/Form/Form";
import { Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import useReactRouter from "use-react-router";  

export default function App() {

  return (
    <div className="App wrapper">
      <header>
        <h3>Spicy life ❤️‍🔥</h3>
        <Nav />
      </header>
      <Router>
        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/restaurantCard/:id" component={RestaurantCard} exact />
          {/* <Form path="/Form" component={Form} exact /> */}
        </Switch>
      </Router>

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

