import axios from 'axios';
import { RiContactsBookLine } from 'react-icons/ri';

const googleApiKey = 'AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y'

export const getPlaceName = async({ coordinates }) => {
  try {
    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=52.2028331,20.9814147&key=AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y`)

    return data
  } catch(error) {
    console.log(error)
  }
}