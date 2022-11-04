import styled, { keyframes } from 'styled-components/macro'
import { theme } from '../../styles/theme'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`
export const StyledRotate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 1s linear infinite;
  text-decoration: none;
  transition: 0.2s all ease-in-out;
  > * {
    color: ${theme.colors.gray300};
    width: 'auto';
    height: 'auto';
  }

  ${({ type }) =>
    type === 'update' && {
      '> *': {
        color: theme.colors.gray300,
        width: 'auto',
        height: 'auto',
      },
    }}
`
