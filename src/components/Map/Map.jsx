import React,{ useState, useEffect } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import axios from "axios"; 
import curry from "../../image/cuteStamp.jpg"; 


export default function Map(){

  const [ marker, setMarker ] = useState(""); 
  
    const mapStyles = {
        margin: "0 auto",
        height: "60vh",
        width: "90%",
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

          var geocoder = new window.google.maps.Geocoder();

          //get addresses from restaurants, update the variable  
            let res = await axios.get("https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/");
            let data = res.data;
            let temp = []; 
            for (let key in data) {
              temp.push(data[key][3])
            }
            let arr = []; 
            console.log(temp)
            temp.map(item=>{
              // console.log(item[3])
                return (
                  geocoder.geocode({address:item}, function(results, status){
                    console.log(item)

                    console.log("results",results)
                    if(status === "OK" && results[0]){
                      let currentLat = results[0].geometry.location.lat();
                      let currentLng = results[0].geometry.location.lng();
                      let letLng = { lat: currentLat, lng: currentLng}; 
                      console.log(letLng)
                      arr.push(letLng)
                        }
                        console.log("arr?",arr)
                        setMarker(arr.map(item=>{
                          return (<Marker position={item} icon={curry} />)
                        }))
                          })
                        )})
                      }
                initMap()
                    }, [])

      return (
        <div className="map_wrapper">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
        > 
        { marker }</GoogleMap>
        </div>
      )
}