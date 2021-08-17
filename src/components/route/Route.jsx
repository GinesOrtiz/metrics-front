import React from 'react'
import { Route as RouterRoute, Redirect } from 'react-router-dom'
import propTypes from 'prop-types'

import { useUser } from '../../context/UserContext'
import { RouteComponentWrapper, RouteGrid, RouteWrapper } from './route.styles'
import TopNav from '../topNav/TopNav'
import Sidebar from '../sidebar/Sidebar'

const Route = ({ component: Component, ...rest }) => {
  const { hasUser } = useUser()

  if (rest.private) {
    return (
      <RouterRoute
        {...rest}
        render={(props) =>
          hasUser ? (
            <RouteWrapper>
              <TopNav />
              <RouteGrid>
                <Sidebar />
                <RouteComponentWrapper>
                  <Component {...props} />
                </RouteComponentWrapper>
              </RouteGrid>
            </RouteWrapper>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    )
  }

  return (
    <RouterRoute
      {...rest}
      render={(props) =>
        hasUser ? (
          <Redirect to="/" />
        ) : (
          <RouteWrapper>
            <Component {...props} />
          </RouteWrapper>
        )
      }
    />
  )
}

Route.propTypes = {
  component: propTypes.elementType,
}
Route.defaultProps = {}

export default Route
