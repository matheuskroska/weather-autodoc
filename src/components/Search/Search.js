import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import axios from 'axios'
import { ApiOptions } from '../../api'
import { WEATHER_API_URL } from '../../api'

export const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${WEATHER_API_URL}/search.json?q=${inputValue}`,
        ApiOptions,
      )
      const data = await response.json()
      return {
        options: data.map((location) => {
          return {
            value: `${location.lat},${location.lon}`,
            label: `${location.name}, ${location.country}`,
          }
        }),
      }
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
      loadOptions={loadOptions}
    />
  )
}
