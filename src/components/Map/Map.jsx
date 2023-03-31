import React from 'react';
import GoogleMapReact from 'google-map-react';


const Map = () => {

  const coordinates = { lat: 52.237049, lng: 21.017532}

  return (
    <div className='h-screen m-16'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y'}}
        defaultCenter={coordinates}
        center = {coordinates}
        defaultZoom={15}
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