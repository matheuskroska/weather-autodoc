import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'
import bg from '../assets/images/fundo-sessao2.png'

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 62.5%;
    background: ${theme.colors.white};
    font-family: ${theme.font.family};
    overflow-x: hidden;
    background: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
  }

  
  button {
    cursor: pointer;
    border: none;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  &::selection {
    color: ${theme.colors.black};
    background:  ${theme.colors.white};
  }
`
