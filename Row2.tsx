import DashboardBox from "@/components/DashboardBox";
import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

//const containerStyle = {
//  width: '100%',
//  height: '100%'
//};

const center = {
  lat: -20.418736, 
  lng: -49.975680
};


const Row2 = () => {
 
  const [marker, setMarker] = useState({
    position: center,
    icon: 'https://icons.veryicon.com/png/o/miscellaneous/display-icon-on-internet-of-things-map/optical-box-3.png'
     
  });

  
  return (
   <DashboardBox gridArea = "b">
    <LoadScript
      googleMapsApiKey={'APIKEY'}
    >
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '100%'}}
        center={center}
        zoom={15}
      >
        <Marker
             label='106'
             position={marker.position}
             icon={{
             url: marker.icon,
             scaledSize: 60
                  
          }}
        />
      </GoogleMap>
    </LoadScript>
    </DashboardBox>
    
  );
        };
 export default Row2;
