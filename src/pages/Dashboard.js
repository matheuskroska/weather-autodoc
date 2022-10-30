import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateLogData } from '../features/weatherLog/weatherLogSlice'
import { listenData, weatherRecordsLogRef } from '../services/database'

export const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    listenData(dispatch, weatherRecordsLogRef, updateLogData)
  }, [dispatch])

  const weatherLogLists = useSelector(
    (state) => state.weatherLog.weatherLogList,
  )

  const useTemperature = (list, operation) => {
    let cities = list.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t.location.name === thing.location.name),
    )
    return cities.filter(
      (item) =>
        item.current.temp_c ===
        operation(...list.map((item) => item.current.temp_c, 0)),
    )
  }

  const tempMax = useTemperature(weatherLogLists, Math.max)
  const tempMin = useTemperature(weatherLogLists, Math.min)

  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        {tempMax &&
          tempMax.map((weatherLog) => (
            <li>
              <h2>{weatherLog.location.name} - Max</h2>
              <p>{weatherLog.current.temp_c}°C</p>
            </li>
          ))}
      </ul>
      <ul>
        {tempMin &&
          tempMin.map((weatherLog) => (
            <li>
              <h2>{weatherLog.location.name} - Min</h2>
              <p>{weatherLog.current.temp_c}°C</p>
            </li>
          ))}
      </ul>
    </>
  )
}
