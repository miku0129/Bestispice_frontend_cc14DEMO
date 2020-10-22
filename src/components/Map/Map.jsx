import React from 'react';
import { GoogleMap } from '@react-google-maps/api';

export default function Map(){
  
    const mapStyles = {
        margin: "0 auto",
        height: "80vh",
        width: "70%",
        boxShadow: "0 4px 8px grey",
        marginBottom: "50px",
        borderRadius: "30px"
      };

      //set Tokyo tower as default center 
    const defaultCenter = {
        lat: 35.658584 ,
        lng: 139.7454316,
      };
      
      return (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
  )
}

