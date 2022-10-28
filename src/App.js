import React, { useEffect, useState } from 'react'
import { ApiOptions, WEATHER_API_URL } from './api'
import { Search } from './components/Search/Search'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecastWeather, setForecastWeather] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [geoCoordinates] = Array(searchData.value)

    const currentWeatherFetch = fetch(
      WEATHER_API_URL + `/current.json?q=${geoCoordinates}`,
      ApiOptions,
    )

    const forecastWeatherFetch = fetch(
      WEATHER_API_URL + `/forecast.json?q=${geoCoordinates}&days=3`,
      ApiOptions,
    )

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const [currentWeatherResponse, forecastWeatherResponse] = response
        const currentWeatherData = await currentWeatherResponse.json()
        const forecastWeatherData = await forecastWeatherResponse.json()
        setCurrentWeather({ city: searchData.label, ...currentWeatherData })
        setForecastWeather({ city: searchData.label, ...forecastWeatherData })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <Search onSearchChange={handleOnSearchChange}></Search>
      {currentWeather && (
        <h2>
          {currentWeather.city} - {currentWeather.current.temp_c}°C
        </h2>
      )}
      {forecastWeather && (
        <ul>
          {forecastWeather.forecast.forecastday.map((forecast) => {
            return (
              <li key={forecast.date}>
                {forecast.date} - {forecast.day.avgtemp_c}°C
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default App
