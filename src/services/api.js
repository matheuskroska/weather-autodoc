import { ApiOptions } from '../config/api'

export const getCity = async (inputValue) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_WEATHER_API_URL}/search.json?q=${inputValue}`,
      ApiOptions,
    )
    const data = await response.json()

    return {
      options: data?.map((location) => {
        return {
          id: location.id,
          name: `${location.name}`,
          label: `${location.name}, ${location.country}`,
        }
      }),
    }
  } catch (error) {
    console.error(error)
  }
}

export const getWeather = async (searchData) => {
  const cityData = searchData

  try {
    const response = await fetch(
      process.env.REACT_APP_WEATHER_API_URL +
        `/forecast.json?q=${cityData.name}&days=0`,
      ApiOptions,
    )

    const cityWeather = {
      ...(await response.json()),
      location: { name: cityData.name, id: cityData.id },
    }
    return cityWeather
  } catch {
    console.log('Error')
  }
}
