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
        `/forecast.json?q=${cityData.name}&days=3&lang=pt`,
      ApiOptions,
    )

    const data = await response.json()

    const cityWeather = {
      current: {
        temp_c: data.current.temp_c,
        feelslike_c: data.current.feelslike_c,
        gust_kph: data.current.gust_kph,
        condition: {
          text: data.current.condition.text,
          icon: data.current.condition.icon,
        },
      },
      forecast: data.forecast.forecastday.map((day) => {
        return {
          astro: {
            sunrise: day.astro.sunrise,
            sunset: day.astro.sunset,
            moonset: day.astro.moonset,
            moonrise: day.astro.moonrise,
            moonfase: day.astro.moon_phase,
          },
          date: day.date,
          day: {
            avgtemp_c: day.day.avgtemp_c,
            maxtemp_c: day.day.maxtemp_c,
            mintemp_c: day.day.mintemp_c,
            daily_chance_of_rain: day.day.daily_chance_of_rain,
            condition: {
              text: day.day.condition.text,
              icon: day.day.condition.icon,
            },
          },
        }
      }),
      location: {
        id: cityData.id,
        name: cityData.name,
        label: cityData.label,
        lastUpdate: new Date().toLocaleString(),
        tz_id: data.location.tz_id,
      },
    }
    return cityWeather
  } catch (e) {
    console.log(e)
  }
}
