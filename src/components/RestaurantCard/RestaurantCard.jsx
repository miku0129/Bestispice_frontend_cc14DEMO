import React, { useState, useEffect } from "react";
import "./Restaurant.css";
import axios from "axios"; 
import { GoogleMap, Marker } from "@react-google-maps/api";
import useReactRouter from "use-react-router";  
import curry from "../../image/curry2-removebg-preview.png"; 


export default function RestaurantCard({match}){

    const [ info, setInfo ] = useState([]); 
    const [ currentCenter , setCurrentCenter ] = useState({}); 

    const { history, location} = useReactRouter(); 

    const mapStyles = {
        margin: "0 auto",
        height: "50vh",
        width: "80%",
        boxShadow: "0 4px 8px grey",
        marginTop: "30px",
        marginBottom: "50px",
        borderRadius: "30px"
      };


useEffect(()=>{
    async function initMap(){
        const res = await axios.get(`https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/${match.params.id}`);
        const data = res.data; 
        let temp = [];  
        for (let key in data) {
            temp.push(data[key]);
          }
          setInfo(temp); 

          // initialize google-map, set lat and lng
          var geocoder = new window.google.maps.Geocoder();
          geocoder.geocode({address: temp[4]}, function(results, status){
              if(status === "OK" && results[0]){
                const lat = results[0].geometry.location.lat();
                const lng = results[0].geometry.location.lng();
                console.log("lat",lat); 
                console.log("lng",lng); 

                const updateCenter = {
                lat: lat,
                lng: lng,
                };
                setCurrentCenter(updateCenter); 
                  }
              }
          )
        }
        initMap(); 
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
           <div className="map_wrapper">
                <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={12}
                center={currentCenter} 
                >
                    {
                    currentCenter.lat &&
                    ( 
                    <Marker 
                    position={currentCenter}
                    icon={curry}/>
                    ) 
                }
                </GoogleMap>
        </div>
           <input type="submit" value="HOME" onClick={()=>history.push(`/`)} />
        </div>
        
    )
}
