import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from '../commom/debounce'
import { Search } from '../features/search/Search'
import { updateData } from '../features/weather/weatherSlice'
import { getWeather } from '../services/api'
import {
  addWeatherLog,
  deleteWeather,
  listenData,
  updateWeather,
  weatherRecordsRef,
} from '../services/database'

export const Home = () => {
  const dispatch = useDispatch()
  const weatherLists = useSelector((state) => state.weather.weatherList)

  useEffect(() => {
    listenData(dispatch, weatherRecordsRef, updateData)
  }, [dispatch])

  const handleUpdate = debounce((location, weatherLists) =>
    updateAndLogWeather(location, weatherLists),
  )

  const updateAndLogWeather = (location, list) => {
    try {
      list.map(async (city) => {
        if (city.location.id === location.id) {
          const cityWeather = await getWeather(location)
          await updateWeather({ ...cityWeather, doc_id: city.doc_id })
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
              <button
                onClick={() => handleUpdate(weather.location, weatherLists)}
              >
                Refresh
              </button>
            </li>
          ))}
      </ul>
      <button>Mostrar min/max</button>
    </>
  )
}
