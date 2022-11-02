import React from 'react'
import { StyledRotate } from './Loader.styled'
import { ReactComponent as IconDice } from '../../assets/images/dice.svg'
import { UpdateIcon } from '@radix-ui/react-icons'

export const Loader = ({ type }) => {
  return (
    <StyledRotate type={type}>
      {type === 'update' ? <UpdateIcon /> : <IconDice />}
    </StyledRotate>
  )
}
