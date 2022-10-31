import React, { useEffect, useState } from 'react'
import { getCity, getWeather } from '../../services/api'
import { addWeather } from '../../services/database'
import { StyledSearch } from './Search.styled'

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
    <StyledSearch
      placeholder='Busque pelo nome da cidade...'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={getCity}
    />
  )
}
