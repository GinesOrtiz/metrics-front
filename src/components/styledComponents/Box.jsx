import styled from 'styled-components'

export const Box = styled.div`
  background-color: ${(props) => props.theme.main};
  box-shadow: 0 0 0 2px ${(props) => props.theme.mainLightShadow};
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-grow: 1;
  transition: all 0.2s;
  width: 100%;
`
