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
  console.log(cityData)

  try {
    const response = await fetch(
      process.env.REACT_APP_WEATHER_API_URL +
        `/forecast.json?q=${cityData.name}&days=0`,
      ApiOptions,
    )

    const data = await response.json()

    const cityWeather = {
      // ...(await response.json()),
      current: {
        temp_c: data.current.temp_c,
      },
      forecast: {
        forecastday: [
          {
            day: {
              avgtemp_c: data.forecast.forecastday[0].day.avgtemp_c,
              condition: {
                icon: data.forecast.forecastday[0].day.condition.icon,
              },
              maxtemp_c: data.forecast.forecastday[0].day.maxtemp_c,
              mintemp_c: data.forecast.forecastday[0].day.mintemp_c,
              daily_chance_of_rain:
                data.forecast.forecastday[0].day.daily_chance_of_rain,
            },
          },
        ],
      },
      location: {
        id: cityData.id,
        name: cityData.name,
        label: cityData.label,
        lastUpdate: new Date().toLocaleString(),
      },
    }
    return cityWeather
  } catch {
    console.log('Error')
  }
}
