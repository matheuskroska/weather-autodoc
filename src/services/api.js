import { deleteEmptySpaces } from '../commom/deleteEmptySpaces'
import { ApiOptions } from '../config/api'

/**
 * It takes a string as an argument, and returns an object with an array of objects as a property.
 *
 * The array of objects has three properties: id, name, and label.
 *
 * The id property is a number, the name property is a string, and the label property is a string.
 *
 * The label property is a concatenation of the name property and the country property.
 *
 * The country property is a string.
 *
 * The country property is not included in the returned object.
 *
 * The returned object is used to populate a dropdown menu.
 *
 * The dropdown menu is used to select a city.
 *
 * The city is used to get weather data.
 *
 * The weather data is displayed on the page.
 *
 * The user can select a different city.
 *
 * The user can select a different city by typing
 * @param inputValue - The current value of the input element.
 * @returns An object with an options property that is an array of objects.
 */

const CITY_ENDPOINT = `${process.env.REACT_APP_WEATHER_API_URL}/search.json?`

export const getCity = async (inputValue) => {
  if (deleteEmptySpaces(inputValue).length === 0) return
  try {
    const response = await fetch(`${CITY_ENDPOINT}q=${inputValue}`, ApiOptions)

    let data = await response.json()

    if (data.error) {
      return (data = { options: [] })
    }

    return {
      options: data.map((city) => ({
        id: city.id,
        name: city.name,
        label: `${city.name}, ${city.country}`,
      })),
    }
  } catch (error) {
    console.error(error)
  }
}

/**
 * It gets the weather data from the API and returns it in a specific format
 * @param searchData - {id: "BRXX0061", name: "São Paulo", label: "São Paulo, SP, Brazil"}
 * @returns An object with the following structure:
 */

const FORECAST_ENDPOINT = `${process.env.REACT_APP_WEATHER_API_URL}/forecast.json`

export const getWeather = async (searchData) => {
  const cityData = searchData
  try {
    const response = await fetch(
      `${FORECAST_ENDPOINT}?q=${cityData.name}&days=3&lang=pt`,
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
