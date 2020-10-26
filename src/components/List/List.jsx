import React, { useState, useEffect } from "react";
import "../List/List.css";
import Map from "../Map/Map"; 
import Form from "../Form/Form"; 
import axios from "axios";
import { Link } from "react-router-dom"; 
import useReactRouter from "use-react-router";  


export default function List() {

    const [allInfo, setAllInfo] = useState("");
    const [restaurantId, setRestaurantId] = useState(""); 

    const { history, location, match } = useReactRouter(); 
    
    //get all restaurant info  
    useEffect(() => {
      async function getAllInfo() {
        let res = await axios.get("https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/");
        let data = res.data;
        let temp = [];
        for (let key in data) {
          temp.push(data[key]);
        }
        setAllInfo(
          temp.map((el) => {
            return (
              <ul key={el[1]}>
                <li>
              <Link to={`/restaurantCard/${el[1]}`}>              
              ID: {el[1]}, Name: {el[0]}, Feature: {el[2]} 
              </Link>
              </li>
              </ul>
            );
          })
        );
      }
      getAllInfo()
    } ,[])

    return (
        <div className="container">
            <div className="box">
                {allInfo}
            </div>
              <Map />
              <Form />
        </div>
    )
}