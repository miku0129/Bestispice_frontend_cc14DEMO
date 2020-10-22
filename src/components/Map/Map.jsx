import React,{ useState, useEffect } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import axios from "axios"; 

export default function Map(){

  
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

        async function mapAddresses() {
          //get addresses from restaurants 
            let req = axios.get("https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/");
            let res = await req;
            let data = res.data;
            let temp = [];
            for (let key in data) {
              temp.push(data[key]);
            }
            let addresses = temp.map((el) => {
                return (
                    el[3]
                );
                })
              console.log(addresses)
              //I'd like to get lat and lng from addresses here 
              //use google geocorder 


            }

        mapAddresses(); 
      
      return (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={defaultCenter}
        />
  )
};

