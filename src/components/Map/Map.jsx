import React,{ useState, useEffect } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import axios from "axios"; 

export default function Map(){

  //manage state of addresses 
  const [addresses, setAddresses] = useState([]); 
  
    const mapStyles = {
        margin: "0 auto",
        height: "50vh",
        width: "70%",
        boxShadow: "0 4px 8px grey",
        marginTop: "30px",
        marginBottom: "50px",
        borderRadius: "30px"
      };

      //set Tokyo tower as default center 
    const defaultCenter = {
        lat: 35.658584 ,
        lng: 139.7454316,
      };

      useEffect(() => {
        async function initMap() {
          //get addresses from restaurants, update the variable  
            let req = axios.get("https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/");
            let res = await req;
            let data = res.data;
            let temp = [];
            for (let key in data) {
              temp.push(data[key]);
            }
            let address = temp.map((el) => {
                return (
                    el[3]
                );
                })
              setAddresses(address); 

            }
        initMap(); 
            } , [])

            console.log(addresses)
            



      return (
        <div className="map_wrapper">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={defaultCenter}
        />
        </div>
      )
}