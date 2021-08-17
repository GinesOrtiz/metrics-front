import React from 'react'

import { SidebarBottom, SidebarButton, SidebarLink, SidebarTop, SidebarWrapper } from './sidebar.styles'
import routes from '../../pages/routes'
import Icon from '../icon/Icon'
import { useTheme } from 'styled-components'
import { useUser } from '../../context/UserContext'

const Sidebar = () => {
  const { updateUser } = useUser()
  const { theme } = useTheme()

  const onChangeTheme = () => {
    updateUser({ theme: theme === 'light' ? 'dark' : 'light' })
  }

  return (
    <SidebarWrapper>
      <SidebarTop>
        {routes
          .filter((route) => route.sidebar)
          .map((route) => (
            <SidebarLink exact to={route.path} key={route.path} activeClassName="selected">
              <Icon type={route.icon} />
            </SidebarLink>
          ))}
      </SidebarTop>
      <SidebarBottom>
        <SidebarButton onClick={onChangeTheme}>
          <Icon type={theme === 'light' ? 'light_mode' : 'dark_mode'} />
        </SidebarButton>
      </SidebarBottom>
    </SidebarWrapper>
  )
}

Sidebar.propTypes = {}

export default Sidebar
