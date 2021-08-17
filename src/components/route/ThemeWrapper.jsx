import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import GlobalStyle from '../styledComponents/GlobalStyle'
import { useUser } from '../../context/UserContext'
import themes from '../styledComponents/theme'

const ThemeWrapper = ({ children }) => {
  const { hasUser, state } = useUser()
  const theme = themes[hasUser ? state.theme : 'dark']

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

ThemeWrapper.propTypes = {
  children: PropTypes.element,
}

export default ThemeWrapper
