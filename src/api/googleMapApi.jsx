import axios from 'axios';
import { RiContactsBookLine } from 'react-icons/ri';

const googleApiKey = 'AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y'

export const getPlaceName = async(coordinates) => {

  const lat = coordinates?.lat.toString()
  const lng = coordinates?.lng.toString() 

  try {
    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y`)

    return data
  } catch(error) {
    console.log(error)
  }
}

// placeName.plus_code.compound_code[0]