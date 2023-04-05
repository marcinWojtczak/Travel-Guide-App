import React from 'react';
import GoogleMapReact from 'google-map-react';



const Map = ({coordinates, setCoordinates}) => {

  // convert coordinate 
  const tr_latitude = parseFloat(coordinates.tr_latitude);
  const tr_longitude = parseFloat(coordinates.tr_longitude);
  const bl_latitude = parseFloat(coordinates.bl_latitude);
  const bl_longitude = parseFloat(coordinates.bl_longitude);
  const coordinatesObj = {tr_latitude, tr_longitude, bl_latitude, bl_longitude};
  console.log(coordinatesObj);
  
  return (
    <div className='h-screen m-16'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y'}}
        center = {{lat:52.237049, lng:21.017532}}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map