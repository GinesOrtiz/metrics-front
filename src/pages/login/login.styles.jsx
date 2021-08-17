import styled, { css } from 'styled-components'
import { Button, Input } from '../../components/styledComponents/Form'

export const LoginPageWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const LoginFormWrapper = styled.div`
  background: ${(props) => props.theme.main};
  padding: 20px 40px;
  border-radius: 8px;
  max-width: 320px;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 0 2px ${(props) => props.theme.mainLightShadow};
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  ${Input} {
    margin-bottom: 8px;
  }

  ${Button} {
    margin-top: 12px;

    ${(props) =>
      props.secondary &&
      css`
        margin-top: 6px;
      `}
  }
`
