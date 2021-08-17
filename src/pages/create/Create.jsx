import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { CreateForm, CreatePageWrapper, CreateFormWrapper } from './create.styles'
import { Button, Input } from '../../components/styledComponents/Form'
import { Subtitle } from '../../components/styledComponents/Typography'
import { Box } from '../../components/styledComponents/Box'

import './lang'
import { createMetric } from './create.service'
import { Alert } from '../../components/styledComponents/Alert'
import Animate from '../../components/animate/Animate'

const CreatePage = () => {
  const { t } = useTranslation()
  const [payload, setPayload] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(null)

  const fields = [
    {
      name: 'name',
      type: 'text',
      placeholder: t('createPage:fields.name'),
    },
    {
      name: 'value',
      type: 'number',
      placeholder: t('createPage:fields.value'),
    },
    {
      name: 'createdAt',
      type: 'datetime-local',
      placeholder: t('createPage:fields.time'),
    },
  ]

  const onSubmit = (ev) => {
    ev.preventDefault()

    setLoading(true)
    setError(null)

    createMetric(payload)
      .then((res) => {
        setLoading(false)
        setSuccess(res.data)
        setPayload({})
      })
      .catch((err) => {
        setLoading(false)
        setError(err.response?.data?.error)
      })
  }

  useEffect(() => {
    let timer

    if (success) {
      timer = setTimeout(() => {
        setSuccess(null)
      }, 3000)
    }

    return () => clearTimeout(timer)
  }, [success])

  return (
    <CreatePageWrapper>
      <CreateFormWrapper>
        <Subtitle>{t('createPage:title')}</Subtitle>
        <Box>
          <CreateForm onSubmit={onSubmit}>
            {fields.map((field) => (
              <Input
                {...field}
                key={field.name}
                required
                value={payload[field.name] || ''}
                onChange={(ev) => setPayload({ ...payload, [field.name]: ev.target.value })}
              />
            ))}
            <div>
              <Button type={'submit'} disabled={loading}>
                {t('createPage:submit')}
              </Button>
            </div>
          </CreateForm>
        </Box>
        <Animate in={!!error} type={'fade'}>
          <Alert type={'warning'}>{t(`createPage:error`)}</Alert>
        </Animate>
        <Animate in={!!success} type={'fade'}>
          <Alert type={'success'}>{success && t(`createPage:success`, success)}</Alert>
        </Animate>
      </CreateFormWrapper>
    </CreatePageWrapper>
  )
}

CreatePage.propTypes = {}

export default CreatePage
