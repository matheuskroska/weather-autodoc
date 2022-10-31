import React from 'react'
import {
  StyledContainer,
  StyledWrapper,
  StyledHeader,
  StyledTitle,
  StyledLogo,
} from './Header.styled'
import LogoAutodoc from '../../assets/images/Logo-Autodoc-18.svg'
import { ReactComponent as LogoWeather } from '../../assets/images/Logo-Weather.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledWrapper>
          <Link to='/'>
            <StyledLogo src={LogoAutodoc} alt='weather' />
          </Link>
          <StyledTitle>
            WHEATER
            <LogoWeather />
          </StyledTitle>
        </StyledWrapper>
      </StyledContainer>
    </StyledHeader>
  )
}
