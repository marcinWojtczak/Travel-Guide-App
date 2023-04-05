import React, {useState} from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const PlacesList = () => {

  const [type, setType] = useState('atractions');
  const [rating, setRating] = useState('');
  const places = [
    {name: 'Cool Place'},
    {name: 'Best Bear'},
    {name: 'Best Steak'},
    {name: 'Cool Place'},
    {name: 'Best Bear'},
    {name: 'Best Steak'},
    {name: 'Cool Place'},
    {name: 'Best Bear'},
    {name: 'Best Steak'},
  ]

  return (
    <div className='h-screen m-16'>
      <h4 className='mb-4 font-bold'>Attractions, Hotel, Restaurants around you</h4>
      <h6 className='mb-2'>Choose a type:</h6>
      <div>
        <select value={type} onChange={(e) => setType(e.target.value)} className='border-2 inline px-2 py-1 mr-2 drop-shadow-lg outline-0'>
          <option value="attractions">Attractions</option>
          <option value="hotels">Hotels</option>
          <option value="restaurants">Restaurants</option>
        </select>
        
        <select value={rating} onChange={(e) => setRating(e.target.value)} className='border-2 inline px-2 py-1 drop-shadow-lg outline-0'>
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4.0</option>
          <option value={4.5}>Above 4.5</option>
        </select>
      </div>
      <div className='h-[100vh] border-solid border-2 border-[black] overflow-x-auto'>
        {places?.map((place, index) => (
          <PlaceDetails place={place}/>
          
        ))}
      </div>
    </div>
  )
}

export default PlacesList