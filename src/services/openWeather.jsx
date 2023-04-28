import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query:(coordinates) => (`weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=ef4d615cd34441d454b6cfd3c320c0d0&units=metric`)
    })
  })
})

export const { useGetWeatherQuery } = weatherApi