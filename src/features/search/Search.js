import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

import { getCity, getWeather } from '../../services/api'
import { addWeather } from '../../services/database'

export const Search = () => {
  const [search, setSearch] = useState('')

  const handleOnChange = async (city) => {
    try {
      const cityWeather = await getWeather(city)
      await addWeather(cityWeather)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={getCity}
    />
  )
}
