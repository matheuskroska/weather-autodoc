import React from 'react'
import { StyledButton } from './Button.styled'

export const Button = ({ onClick, variant, ...props }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {props.children}
    </StyledButton>
  )
}
