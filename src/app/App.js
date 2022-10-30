import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search } from '../features/search/Search'
import { getWeather } from '../services/api'
import {
  addWeatherLog,
  deleteWeather,
  listenData,
  updateWeather,
} from '../services/database'

function App() {
  const dispatch = useDispatch()
  const weatherLists = useSelector((state) => state.weather.weatherList)

  /* Listening to the database and dispatching the data to the redux store. */
  useEffect(() => {
    listenData(dispatch)
  }, [dispatch])

  const handleUpdate = (cityData) => {
    try {
      weatherLists.map(async (city) => {
        if (city.location.id === cityData.id) {
          const cityWeather = await getWeather(cityData)
          await updateWeather({ ...cityWeather, doc_id: city.doc_id })
          await addWeatherLog({ ...cityWeather, doc_id: city.doc_id })
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = (id) => {
    deleteWeather(id)
  }

  return (
    <>
      <Search></Search>
      <ul>
        {weatherLists &&
          weatherLists.map((weather) => (
            <li>
              <h2>{weather.location.name}</h2>
              <p>{weather.current.temp_c}°C</p>
              <button onClick={() => handleDelete(weather.doc_id)}>
                Delete
              </button>
              <button onClick={() => handleUpdate(weather.location)}>
                Refresh
              </button>
            </li>
          ))}
      </ul>
    </>
  )
}

export default App
