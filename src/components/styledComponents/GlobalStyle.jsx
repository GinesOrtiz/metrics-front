import styled, { createGlobalStyle } from 'styled-components'

export const size = {
  mobile: 768,
  desktop: 1024,
}

export const device = {
  mobile: `max-width: ${size.mobile + 1}px`,
  desktop: `min-width: ${size.desktop}px`,
}

const GlobalStyle = createGlobalStyle`
  html {
    overflow: auto;
  }
  html,
  body {
    background: ${(props) => props.theme.mainDark};
    color: ${(props) => props.theme.text};
    transition: all 0.2s;
  }
  html,
  body,
  #root {
    margin: 0;
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    outline: none;
  }
`

export const DropShadow = styled.div`
  background-color: ${(props) => props.theme.mainDark};
  opacity: 0.5;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export default GlobalStyle
