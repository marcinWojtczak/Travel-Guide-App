import axios from 'axios';

export const getWeatherData = async () => {
  try {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=52.2028346&lon=20.9814106&appid=ef4d615cd34441d454b6cfd3c320c0d0&units=metric`)
    
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

