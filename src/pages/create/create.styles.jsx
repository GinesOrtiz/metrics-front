import styled from 'styled-components'
import { Box } from '../../components/styledComponents/Box'
import { Button, Input } from '../../components/styledComponents/Form'

export const CreatePageWrapper = styled.div`
  padding: 26px 26px;
  display: flex;
  flex-grow: 1;
`

export const CreateFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 60%;

  ${Box} {
    flex-grow: 0;
    min-width: 400px;
    margin-bottom: 10px;
  }
`
export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${Input} {
    width: 100%;
    margin-bottom: 12px;
  }

  ${Button} {
    margin-top: 10px;
  }
`
