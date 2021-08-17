import styled from 'styled-components'

export const TopNavWrapper = styled.div`
  background-color: ${(props) => props.theme.main};
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  box-shadow: inset 0 -1px ${(props) => props.theme.mainLightShadow};
  position: relative;
  z-index: 2;
  transition: all 0.2s;
`
export const TopNavBrand = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
`
export const TopNavUser = styled.div`
  position: relative;
`
export const TopNavMenu = styled.div`
  position: absolute;
  z-index: 3;
  right: 0;
  background-color: ${(props) => props.theme.main};
  padding: 10px;
  border-radius: 4px;
  min-width: 200px;
  box-shadow: 0 0 0 2px ${(props) => props.theme.mainLightShadow};
`
export const TopNavMenuItem = styled.div`
  font-size: 14px;
  padding: 10px 16px;
  cursor: pointer;
  color: ${(props) => props.theme.textLight};
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.mainLight};
    color: ${(props) => props.theme.text};
  }
`
