import styled, { css } from 'styled-components'

export const Alert = styled.div`
  padding: 10px 20px;
  margin: 6px 0;
  font-size: 12px;
  border-radius: 4px;

  ${(props) =>
    props.type === 'warning' &&
    css`
      background-color: ${(props) => props.theme.yellowDark};
      color: ${(props) => props.theme.yellowLight};
    `}

  ${(props) =>
    props.type === 'success' &&
    css`
      background-color: ${(props) => props.theme.blueDark};
      color: ${(props) => props.theme.text};
    `}
`
