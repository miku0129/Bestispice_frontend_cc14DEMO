import React,{ useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import axios from "axios"; 
import curry from "../../image/cuteStamp.jpg"; 


export default function Map(){

  const [ marker, setMarker ] = useState(""); 

  const [ selected, setSelected ] = useState({}); 
  const onSelect = item => {
    setSelected(item); 
  }

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
              temp.push(data[key])
              console.log(data[key])

            }
            let arr = []; 
            temp.map(element=>{
                return (
                  geocoder.geocode({address:element[3]}, function(results, status){
                    if(status === "OK" && results[0]){
                      let currentLat = results[0].geometry.location.lat();
                      let currentLng = results[0].geometry.location.lng();
                      let letLng = { lat: currentLat, lng: currentLng}; 
                      element[6] = letLng
                      arr.push(element)
                        }
                        setMarker(arr.map(item=>{
                          return (
                          <Marker 
                          key={item[1]} 
                          position={item[6]} 
                          icon={curry} 
                          onClick={()=>onSelect(item)}/>)
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
            zoom={11}
            center={defaultCenter}
          > 
          { marker }
          {
            selected[6] &&
            (<InfoWindow position={selected[6]}><p>{selected[0]}</p></InfoWindow>)
          }
          </GoogleMap>
        </div>
      )
}