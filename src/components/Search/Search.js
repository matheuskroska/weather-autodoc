import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncPaginate } from 'react-select-async-paginate'
import { getWeather } from '../../redux/actions/getWeather'
import { getCity } from '../../hooks/getCity'

export const Search = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  return (
    <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={null}
      onChange={(searchData) => dispatch(getWeather(searchData))}
      loadOptions={getCity}
    />
  )
}
