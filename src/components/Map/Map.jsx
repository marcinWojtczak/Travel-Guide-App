import React from 'react';
import GoogleMapReact from 'google-map-react';
import PlacesList from '../PlacesList/PlacesList';




const Map = ({coordinates, setCoordinates, setBounds, places}) => {

  // convert coordinate 
  const tr_latitude = parseFloat(coordinates.tr_latitude);
  const tr_longitude = parseFloat(coordinates.tr_longitude);
  const bl_latitude = parseFloat(coordinates.bl_latitude);
  const bl_longitude = parseFloat(coordinates.bl_longitude);
  const coordinatesObj = {tr_latitude, tr_longitude, bl_latitude, bl_longitude};
  // console.log(coordinatesObj);
  
  return (
    <div className='h-[90vh] w-full flex gap-8 p-16'>
      <div className='basis-1/3'>
        <PlacesList places={places}/>
      </div>
      <div className='basis-2/3' >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y'}}
          center = {{lat:52.237049, lng:21.017532}}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          // options={''}
          onChange={(e) => {
            console.log(e)
            setCoordinates({ lat: e.center.lat, lng: e.center.lng});
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
          }}
          // onChildClick={''}
        >
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map