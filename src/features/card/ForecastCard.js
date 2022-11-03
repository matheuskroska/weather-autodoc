import React from 'react'
import {
  StyledAverage,
  StyledCurrent,
  StyledFeels,
  StyledSun,
  StyledTempContainer,
  StyledTempMinMax,
  StyledTempWrapper,
  StyledTextCondition,
  StyledTextConditionWrapper,
} from './Card.styled'

import { ReactComponent as IconRain } from '../../assets/images/ico-rain.svg'

export const ForecastCard = ({ weather, extended, currentDay }) => {
  return (
    <>
      <StyledTempContainer>
        <StyledTempWrapper>
          <StyledCurrent>
            <img
              src={
                currentDay === 0
                  ? weather.current.condition.icon
                  : weather.forecast[currentDay].day.condition.icon
              }
              alt='weatherIcon'
            ></img>
            {currentDay === 0
              ? weather.current.temp_c
              : weather.forecast[currentDay].day.avgtemp_c}
            °C
          </StyledCurrent>
          <StyledTempMinMax>
            <div>
              <span>{weather.forecast[currentDay].day.maxtemp_c} °C</span>
              <span>{weather.forecast[currentDay].day.mintemp_c} °C</span>
            </div>
            <img
              src={weather.forecast[currentDay].day.condition.icon}
              alt='weatherIcon'
            ></img>
          </StyledTempMinMax>
        </StyledTempWrapper>

        <StyledAverage>
          <div>
            <span>MÉDIA : </span>
            <span> {weather.forecast[currentDay].day.avgtemp_c} °C</span>
          </div>
          <div>
            <span>
              <IconRain />
              {weather.forecast[currentDay].day.daily_chance_of_rain}%
            </span>
          </div>
        </StyledAverage>
        {extended && (
          <>
            <StyledFeels>
              <div>
                <span>SENSAÇÃO TÉRMICA : </span>
                <span>
                  {currentDay !== 0
                    ? 'indisponivel para dias futuros'
                    : weather.current.feelslike_c + ' °C'}
                </span>
              </div>
              <div>
                <span>VENTO : </span>
                <span>
                  {currentDay !== 0
                    ? 'indisponivel para dias futuros'
                    : weather.current.gust_kph + ' km/h'}
                </span>
              </div>
            </StyledFeels>
            <StyledSun>
              <div>
                <span> NASCER DO SOL : </span>
                <span>{weather.forecast[currentDay].astro.sunrise}</span>
              </div>
              <div>
                <span>POR DO SOL : </span>
                <span>{weather.forecast[currentDay].astro.sunset}</span>
              </div>
            </StyledSun>
          </>
        )}
      </StyledTempContainer>
      <StyledTextConditionWrapper>
        <StyledTextCondition>
          {weather.forecast[currentDay].day.condition.text}
        </StyledTextCondition>
      </StyledTextConditionWrapper>
    </>
  )
}
