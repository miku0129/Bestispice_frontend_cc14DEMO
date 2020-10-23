import React, { useState, useEffect } from "react";
import "../List/List.css";
import Map from "../Map/Map"; 
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

    //delete one restaurant info
    // async function deleteRestaurant() {
    //   let res = await axios.delete(`https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/${restaurantId}`);
    //   let data = res.data;
    //   console.log(data);
    //   setDeleteMessage(<p>{data.message}</p>);
    // }
  
    

    return (
        <div className="container">
            <div className="box">
                {allInfo}
            </div>
            <div>
              <label>
                <span>more info</span>
                <input type="text" name="id" className="textField" placeholder="restaurant ID here" onChange={e=>{console.log(e.target.value); setRestaurantId(e.target.value)}}></input>
              </label>
              {/* <button type="submit" value="submit"><Link to={`/RestaurantCard/${restaurantId}`}>submit</Link></button> */}
              <input type="submit" value="submit" onClick={()=>history.push(`/RestaurantCard/${restaurantId}`)} />
            </div>
            {/* <div className="box">
              <label>
                <span>delete</span>
                <input type="text" name="id" className="textField" placeholder="restaurant ID here" onChange={e=>{console.log(e.target.value); setRestaurantId(e.target.value)}}></input>
              </label>
              <input type="submit" value="submit" onClick={deleteRestaurant} />
               {deleteMessage}
            </div> */}
            <label>
              <span>add/edit</span>
            </label>
            <input type="submit" value="click" onClick={()=>history.push(`/form`)} />
            <Map />
        </div>

    )
}