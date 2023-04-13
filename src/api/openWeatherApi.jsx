import axios from 'axios';

export const getWeatherData = async ({ coordinates }) => {
  const { lat, lng } = coordinates;
  try {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ef4d615cd34441d454b6cfd3c320c0d0`, {
    })
    console.log(data)
    return data
  } catch(error) {
    console.log(error)
  }
}