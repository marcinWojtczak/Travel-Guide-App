import axios from 'axios';

export const getPlaceData = async(destination) => {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&origin=*&titles=${destination}&redirects=1`

  try {
    const response = await axios.get(url)
    return response
    // return response.data.query.pages[32908].extract


  } catch(error) {
    console.log(error)
  }
}

// export const getPhotoPlaces = async(photoReference) => {
  
//   try {
//     // const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y`)
//     // const response = await axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${photoReference}&key=AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y`) 
    
//     return response

//   } catch(error) {
//     console.log(error)
//   }
// }
