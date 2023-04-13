// import axios from 'axios';


// export const getSearchingData = async(destination) => {
//   const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=warsaw&formatversion=2&exsentences=10&exlimit=1&explaintext=2&origin=*`

//   try {
//     const {data: {query: {pages}} } = await axios.get(url)

//   // const pages = data.query.pages[0].extract;
//     return pages[0];
//   } catch(error) {
//     console.log(error)
//   }
// }

// export const getDestinationPhoto = async(destination) => {
//   const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=Image:Commons-logo.svg&prop=imageinfo`

//   try {
//     const data = await axios.get(url)
//     return data
//     // return response.data.query.pages[32908].extract


//   } catch(error) {
//     console.log(error)
//   }
// }


