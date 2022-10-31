import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start;
  padding-top: ${theme.space[2]};
`
export const StyledListItem = styled.li`
  width: 100%;
  max-width: calc(33.3% - 10px);

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`
