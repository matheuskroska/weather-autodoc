import { ApiOptions } from '../config/api'

export const getCity = async (inputValue) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_WEATHER_API_URL}/search.json?q=${inputValue}`,
      ApiOptions,
    )

    let data = []
    data = await response.json()

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

    const data = await response.json()
    // console.log(data)

    const cityWeather = {
      // ...(await response.json()),
      current: {
        temp_c: data.current.temp_c,
        feelslike_c: data.current.feelslike_c,
        gust_kph: data.current.gust_kph,
        condition: {
          text: data.current.condition.text,
          icon: data.current.condition.icon,
        },
      },
      forecast: {
        forecastday: [
          {
            astro: {
              sunrise: data.forecast.forecastday[0].astro.sunrise,
              sunset: data.forecast.forecastday[0].astro.sunset,
              moonset: data.forecast.forecastday[0].astro.moonset,
              moonrise: data.forecast.forecastday[0].astro.moonrise,
              moonfase: data.forecast.forecastday[0].astro.moon_phase,
            },
            day: {
              avgtemp_c: data.forecast.forecastday[0].day.avgtemp_c,
              maxtemp_c: data.forecast.forecastday[0].day.maxtemp_c,
              mintemp_c: data.forecast.forecastday[0].day.mintemp_c,
              daily_chance_of_rain:
                data.forecast.forecastday[0].day.daily_chance_of_rain,
              condition: {
                text: data.forecast.forecastday[0].day.condition.text,
                icon: data.forecast.forecastday[0].day.condition.icon,
              },
            },
          },
        ],
      },
      location: {
        id: cityData.id,
        name: cityData.name,
        label: cityData.label,
        lastUpdate: new Date().toLocaleString(),
        tz_id: data.location.tz_id,
      },
    }
    return cityWeather
  } catch {
    console.log('Error')
  }
}
