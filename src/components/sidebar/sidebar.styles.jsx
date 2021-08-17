import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const SidebarWrapper = styled.div`
  width: 64px;
  background-color: ${(props) => props.theme.main};
  box-shadow: inset -1px 0 ${(props) => props.theme.mainLightShadow};
  display: flex;
  flex-direction: column;
  padding: 16px 10px;
  justify-content: space-between;
  transition: all 0.2s;
`

export const SidebarButtonStyles = css`
  color: ${(props) => props.theme.textDark};
  line-height: 0;
  padding: 8px 6px;
  text-align: center;
  transition: all 0.2s;
  margin-bottom: 8px;
  border-radius: 8px;
  height: 44px;
  width: 44px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.selected,
  &:hover {
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.mainLight};
  }
`

export const SidebarLink = styled(NavLink)`
  ${SidebarButtonStyles}
`
export const SidebarButton = styled.div`
  ${SidebarButtonStyles};
  margin-bottom: 0;
`

export const SidebarTop = styled.div``

export const SidebarBottom = styled.div``
