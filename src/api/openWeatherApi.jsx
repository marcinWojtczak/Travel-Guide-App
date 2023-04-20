import axios from 'axios';

export const getWeatherData = async (coordinates) => {

  const lat = coordinates?.[0]?.result_object?.latitude
  const lon = coordinates?.[0]?.result_object?.longitude

  try {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ef4d615cd34441d454b6cfd3c320c0d0&units=metric`)
    
    const {
      main: {temp, feels_like, humidity, temp_min, temp_max, pressure},
      dt,
      weather,
      wind: {speed}
    } = data

    return {temp, feels_like, humidity, temp_min, temp_max, pressure, dt,
      weather, speed}

  } catch(error) {
    console.log(error)
  }
}

