import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { useVariant } from '../../commom/useVariant'

const variants = {
  primary: css`
    > * {
      text-decoration: none;
      color: ${theme.colors.white};
      padding: 0 ${theme.space[3]};
      height: ${theme.space[5]};
      display: flex;
      align-items: center;
    }
    display: flex;
    margin: auto;
    font-family: inherit;
    border-radius: ${theme.borderRadius.sm};
    background-color: ${theme.colors.red};
    align-items: center;
    font-size: ${theme.font.sizes.small};
    transition: ${theme.transitions.fast} all ease-in-out;
    &:hover {
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.blue};
      > * {
        color: ${theme.colors.blue};
        text-decoration: none;
      }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      justify-content: center;
      width: 100%;
      > * {
        text-decoration: none;
        color: ${theme.colors.white};
        padding: 0 ${theme.space[3]};
        height: ${theme.space[5]};
        display: flex;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        justify-content: center;
      }
    }
  `,
  svg: css`
    > * {
      text-decoration: none;
      color: ${theme.colors.blue};
      width: ${theme.space[2]};
      height: ${theme.space[2]};
    }

    &:hover {
      > * {
        color: ${theme.colors.red};
        text-decoration: none;
      }
    }

    background-color: transparent;
  `,

  toolbarSVG: css`
    > * {
      text-decoration: none;
      color: ${theme.colors.blue};
      width: ${theme.space[5]};
      height: ${theme.space[5]};
    }

    &:hover {
      > * {
        color: ${theme.colors.red};
        text-decoration: none;
      }
    }
    background-color: transparent;
  `,
}

export const StyledButton = styled.button`
  ${(props) => useVariant(props.variant, variants)}
`
