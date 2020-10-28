import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import List from "./components/List/List";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";
import { Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import useReactRouter from "use-react-router";  

export default function App() {

  return (
    <div className="App wrapper">
      <header>
        <h3 style={{textAlign:"center"}}>Spice up your Life!🌶️</h3>
        <Nav />
      </header>
      <Router>
        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/restaurantCard/:id" component={RestaurantCard} exact />
        </Switch>
      </Router>
      <footer style={{fontSize:"X-large"}}>Code Chrysalis 🐍🐍🐍</footer>
    </div>
  );
}

