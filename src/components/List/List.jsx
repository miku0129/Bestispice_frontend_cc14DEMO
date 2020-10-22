import React, { useState, useEffect } from "react";
import "../List/List.css";
import axios from "axios";

export default function List() {

    const [allInfo, setAllInfo] = useState("");
    
    //get all restaurant info  
    useEffect(() => {
      async function getAllInfo() {
        let req = axios.get("https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/");
        let res = await req;
        let data = res.data;
        console.log(data);
        let temp = [];
        for (let key in data) {
          console.log(data[key]);
          temp.push(data[key]);
        }
        console.log(temp);
        setAllInfo(
          temp.map((el) => {
            return (
              <ul key={el[1]}>
                <li>ID: {el[1]}, Name: {el[0]}, Feature: {el[3]}</li>
              </ul>
            );
          })
        );
      }
      getAllInfo()
    } ,[])
  

    return (
        <div className="container">
            <dive>
                {allInfo}
            </dive>
        </div>

    )
}