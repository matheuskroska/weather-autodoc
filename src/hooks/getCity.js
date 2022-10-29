import { WEATHER_API_URL } from '../config/api'
import { ApiOptions } from '../config/api'

export const getCity = async (inputValue) => {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/search.json?q=${inputValue}`,
      ApiOptions,
    )
    const data = await response.json()

    return {
      options: data?.map((location) => {
        return {
          id: location.id,
          value: `${location.name}`,
          label: `${location.name}, ${location.country}`,
        }
      }),
    }
  } catch (error) {
    console.error(error)
  }
}
