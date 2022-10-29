import React, { useEffect } from 'react'
import { Search } from './components/Search/Search'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWeather } from './redux/actions/deleteWeather'
import { listenData } from './redux/actions/listenData'

function App() {
  const dispatch = useDispatch()
  const weatherLists = useSelector((state) => state.weather.weatherList)

  useEffect(() => {
    listenData(dispatch)
  }, [dispatch])

  return (
    <>
      <Search></Search>
      <ul>
        {weatherLists &&
          weatherLists.map((weather) => (
            <li data={weather.id} key={weather.id}>
              <h2>{weather.location.name}</h2>
              <p>{weather.current.temp_c}°C</p>
              <p>{weather.current.condition.text}</p>
              <img
                src={weather.current.condition.icon}
                alt={weather.current.condition.text}
              />
              <button onClick={() => dispatch(deleteWeather(weather.id))}>
                Delete
              </button>
              <button onClick={() => dispatch(deleteWeather(weather.id))}>
                Refresh
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
