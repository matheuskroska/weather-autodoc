import { getCity, getWeather } from '../services/api'
import { addWeather } from '../services/database'

/**
 * It takes a location as an argument, and returns a promise that resolves to an array of random
 * cities.
 * @param location - The location to search for.
 */
const randomCities = async (location) => {
  try {
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

    return weather
  } catch (error) {
    throw error
  }
}

export const useBatchWeather = () => {
  randomCities([
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
