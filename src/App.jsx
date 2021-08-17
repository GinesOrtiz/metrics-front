import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'

import Route from './components/route/Route'
import routes from './pages/routes'
import { UserProvider } from './context/UserContext'
import i18n from './services/i18n'
import ThemeWrapper from './components/route/ThemeWrapper'

const App = () => {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <UserProvider>
          <ThemeWrapper>
            <Switch>
              {routes.map((route) => (
                <Route {...route} key={route.path} />
              ))}
            </Switch>
          </ThemeWrapper>
        </UserProvider>
      </I18nextProvider>
    </BrowserRouter>
  )
}

export default App
