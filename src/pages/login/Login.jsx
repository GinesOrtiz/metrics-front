import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LoginForm, LoginFormWrapper, LoginPageWrapper } from './login.styles'
import { doCreate, doLogin } from './login.service'
import { setItem } from '../../services/localStorage'
import { Title } from '../../components/styledComponents/Typography'
import { Button, Input } from '../../components/styledComponents/Form'
import { Alert } from '../../components/styledComponents/Alert'

import './lang'

const LoginPage = () => {
  const { t } = useTranslation()
  const [mode, setMode] = useState('login')
  const [payload, setPayload] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onChangeMode = () => {
    setMode(mode === 'login' ? 'create' : 'login')
  }

  const onChange = (key, value) => {
    setPayload({ ...payload, [key]: value })
  }

  const onSubmit = (ev) => {
    const action = mode === 'login' ? doLogin : doCreate

    ev.preventDefault()
    setError(null)
    setLoading(true)

    action(payload)
      .then((res) => {
        setItem('user', res.data)
        window.location.reload()
      })
      .catch((err) => {
        setLoading(false)
        setError(err.response?.data?.error)
      })
  }

  return (
    <LoginPageWrapper>
      <LoginFormWrapper>
        <Title>{t(`loginPage:${mode}.title`)}</Title>
        <LoginForm onSubmit={onSubmit}>
          <Input
            required
            type={'text'}
            placeholder={t(`loginPage:username`)}
            onChange={(ev) => onChange('username', ev.target.value)}
          />
          <Input
            required
            type={'password'}
            placeholder={t(`loginPage:password`)}
            onChange={(ev) => onChange('password', ev.target.value)}
          />
          {error && <Alert type={'warning'}>{t(`loginPage:errors.${error}`)}</Alert>}
          <Button type={'submit'} disabled={loading}>
            {t(loading ? 'common:loading' : `loginPage:${mode}.action`)}
          </Button>
          <Button secondary type={'button'} onClick={onChangeMode} disabled={loading}>
            {t(`loginPage:${mode}.secondaryAction`)}
          </Button>
        </LoginForm>
      </LoginFormWrapper>
    </LoginPageWrapper>
  )
}

LoginPage.propTypes = {}

export default LoginPage
