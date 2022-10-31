import { getCity, getWeather } from '../services/api'
import { addWeather } from '../services/database'

const randomCities = async (location) => {
  try {
    const cities = await getCity(location)

    const randomCities = cities.options.sort(() => 0.5 - Math.random())
    const randomCities3 = randomCities.slice(0, 1)

    randomCities3.forEach(async (city) => {
      const cityWeather = await getWeather(city)
      await addWeather(cityWeather)
    })
  } catch (error) {
    console.error(error)
  }
}

export const useBatchWeather = () => {
  randomCities('Brazil')
  randomCities('United States')
  randomCities('Japan')
  randomCities('Germany')
  randomCities('France')
  randomCities('Argentina')
}
