import { setLoader } from '../features/loader/loaderSlice'
import { getCity, getWeather } from '../services/api'
import { addWeather } from '../services/database'

/**
 * It takes a location as an argument, and returns a promise that resolves to an array of random
 * cities.
 * @param location - The location to search for.
 */

const useRandomCities = async (dispatch, location) => {
  try {
    dispatch(
      setLoader({ loading: true, error: false, message: '', name: 'batch' }),
    )
    let promiseCity = []
    location.map(async (city) => {
      promiseCity.push(getCity(city))
    })
    const cities = await Promise.all(promiseCity)

    let randomCities = []
    cities.map(async (city) => {
      randomCities.push(
        city.options[Math.floor(Math.random() * city.options.length)],
      )
    })

    let promiseWeather = []
    randomCities.map(async (city) => {
      promiseWeather.push(getWeather(city))
    })
    const weather = await Promise.all(promiseWeather)

    let promiseAddWeather = []
    weather.map(async (item) => {
      promiseAddWeather.push(addWeather(item))
    })
    await Promise.all(promiseAddWeather)
    dispatch(setLoader({ loading: false, error: false, message: '', name: '' }))
  } catch (error) {
    throw error
  }
}

export const useBatchWeather = async (dispatch) => {
  useRandomCities(dispatch, [
    'Brazil',
    'Germany',
    'France',
    'Spain',
    'Argentina',
    'Italy',
    'England',
    'Portugal',
    'USA',
    'Canada',
    'China',
    'Japan',
    'Russia',
  ])
}
