import React,{ useState, useEffect } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import axios from "axios"; 
import curry from "../../image/curry2-removebg-preview.png"; 


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
            let req = axios.get("https://cc14polyglottal-app.herokuapp.com/api/v1/restaurants/");
            let res = await req;
            let data = res.data;
            for (let key in data) {
              // temp.push(data[key])
              geocoder.geocode({address: data[key][4]}, function(results, status){
                console.log("item?",data[key]); 
                console.log(results)
                console.log("status?",status)
                if(status === "OK" && results[0]){
                  const currentLat = results[0].geometry.location.lat();
                  const currentLng = results[0].geometry.location.lng();
                  return setMarker(<Marker position={{lat: currentLat, lng: currentLng}} icon={curry} />)
                    }
                  })

                 }

          // initialize google-map, set lat and lng
          // Only Nong Inlay shown 
          // var geocoder = new window.google.maps.Geocoder();

            // temp.map((item)=>{
            //   console.log(item)

            //   return (geocoder.geocode({address: item[4]}, function(results, status){
            //     console.log("item?",item); 
            //     console.log(results)
            //     console.log("status?",status)
            //     if(status === "OK" && results[0]){
            //       const currentLat = results[0].geometry.location.lat();
            //       const currentLng = results[0].geometry.location.lng();
            //       return (<Marker key={item[1]} position={{lat: currentLat, lng: currentLng}} icon={curry} />)
            //         }

            //       })

            //     )

            //     })

            };
        initMap();  
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