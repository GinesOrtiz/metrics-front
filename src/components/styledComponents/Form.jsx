import styled, { css } from 'styled-components'

export const Input = styled.input`
  border: none;
  padding: 10px 14px;
  border-radius: 4px;
  transition: all 0.2s;
  height: 38px;

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.text};
  }
`

export const Button = styled.button`
  border: none;
  padding: 12px 20px;
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.text};
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  letter-spacing: 0.5px;

  &:hover {
    background: ${(props) => props.theme.blueDark};
  }

  &:disabled {
    background: ${(props) => props.theme.blueDark};
    color: ${(props) => props.theme.textLight};
  }

  ${(props) =>
    props.secondary &&
    css`
      background-color: ${(props) => props.theme.main};

      &:hover {
        background-color: ${(props) => props.theme.mainLight};
      }

      &:disabled {
        background-color: ${(props) => props.theme.main};
        color: ${(props) => props.theme.textLight};
      }
    `}
`
