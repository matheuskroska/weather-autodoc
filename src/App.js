import React, { useState } from 'react'
import { Search } from './components/Search/Search'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromList } from './redux/slices/weatherSlice'

function App() {
  const dispatch = useDispatch()
  const weatherLists = useSelector((state) => state.weather.weatherList)

  return (
    <>
      <Search></Search>
      <ul>
        {weatherLists.map((weather) => (
          <li key={weather.id}>
            <h2>{weather.location.name}</h2>
            <p>{weather.current.temp_c}°C</p>
            <p>{weather.current.condition.text}</p>
            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
            />
            <button onClick={() => dispatch(removeFromList(weather.id))}>
              Delete
            </button>
            <h2>forecast</h2>

            {weather.forecast.forecastday.map((forecast) => (
              <div key={forecast.date}>
                <p>{forecast.date}</p>
                <p>{forecast.day.maxtemp_c}°C</p>
                <p>{forecast.day.mintemp_c}°C</p>
                <p>{forecast.day.condition.text}</p>
                <img
                  src={forecast.day.condition.icon}
                  alt={forecast.day.condition.text}
                />
              </div>
            ))}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
