import React, {useState, useEffect, createRef, useContext} from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceDataContext from '../../../context/PlaceDataContext';
import Input from '../../Input/Input';
import { SiYourtraveldottv } from "react-icons/si";
import { Link } from 'react-router-dom';



const PlacesList = ({type, setType, places, rating, setRating}) => {
  
  const { childClicked } = useContext(PlaceDataContext)
  //all references
  const [elRefs, setElRefs] = useState([]);
  
  useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, index) => refs[index] || createRef()));
  }, [places]);

  return (
    <div className='h-full flex flex-col justify-center items-center mt-2'>
      <Link to='/'>
        <div className='flex justify-center items-center cursor-pointer gap-2 p-2'>
          <h3><SiYourtraveldottv /></h3>
          <h3 className='font-bold'>Travel Places</h3>
        </div>
      </Link>
      <div className='mx-4 w-[90%] flex flex-col items-start justify-between gap-2'>
        <h4 className='font-bold'>Attractions, Hotel, Restaurants around you</h4>
        <Input />
        <h6>Choose a type:</h6>
        <div className='mb-6'>
          <select value={type} onChange={(e) => setType(e.target.value)} className='border-2 inline rounded-md px-2 py-1 mr-2 drop-shadow-lg outline-0'>
            <option value="restaurants">Restaurants</option>
            <option value="attractions">Attractions</option>
            <option value="hotels">Hotels</option>
          </select>
          
          <select value={rating} onChange={(e) => setRating(e.target.value)} className='border-2 rounded-lg inline px-2 py-1 drop-shadow-lg outline-0'>
            <option value={null}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </div>
      </div>
      <div className='flex flex-col gap-6 h-[80%] w-[90%] overflow-x-auto items-center shadow-2xl'>
        {places?.map((place, index) => (
        <div key={index} ref={elRefs[index]} className='border-t border-b border-zinc-400 w-[90%] ' >
          <PlaceDetails 
            place={place} 
            selected={Number(childClicked) === index} 
            refProp={elRefs[index]}/>
        </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesList