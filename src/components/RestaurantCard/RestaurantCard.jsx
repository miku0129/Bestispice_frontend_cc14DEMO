import React, { useState, useEffect } from "react";
import "./Restaurant.css";
import axios from "axios"; 

export default function RestaurantCard({match}){

    const [ info, setInfo ] = useState([]); 

useEffect(()=>{
    async function restaurantInfo(){
        const res = await axios.get(`https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/${match.params.id}`);
        const data = res.data; 
        let temp = [];  
        for (let key in data) {
            temp.push(data[key]);
          }
          setInfo(temp); 
        }
        restaurantInfo(); 
            },[])

    return(
        //miku: add picture image here 
        <div>
            <ul>
                <li>name: {info[3]}</li>
                <li>feature: {info[2]}</li>
                <li>place: {info[4]}</li>
                <li>business hour: {info[0]}</li>
                <li>business hour(evening): {info[1]}</li>
                <li>regular holiday: {info[5]}</li>
                <li>TELL: {info[6]}</li>
                <li>URL: {info[7]}</li>
           </ul>
           <input type="submit" value="submit" onClick={()=>history.push(`/`)} />
        </div>
        
    )
}
