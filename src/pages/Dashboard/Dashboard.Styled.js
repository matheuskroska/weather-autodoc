import styled from 'styled-components/macro'
import { theme } from '../../styles/theme'

export const StyledListItem = styled.li`
  width: 100%;
  max-width: 100%;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`

export const StyledTitle = styled.h2`
  font-size: ${theme.font.sizes.subtitle};
  color: ${theme.colors.blue};
`
