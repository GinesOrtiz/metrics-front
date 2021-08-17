import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { HomePageWrapper, HomePageZone } from './home.styles'
import { Box } from '../../components/styledComponents/Box'
import { Subtitle } from '../../components/styledComponents/Typography'
import Charts from '../../components/charts/Charts'
import { getMetrics, prepareChart } from './home.service'
import './lang'

const HomePage = () => {
  const { t } = useTranslation()
  const [data, setData] = useState(null)
  const charts = [
    {
      type: 'smoothLine',
      title: t('homePage:charts.perMinute'),
      average: 'minute',
    },
    {
      type: 'smoothLine',
      title: t('homePage:charts.perHour'),
      average: 'hour',
    },
    {
      type: 'smoothLine',
      title: t('homePage:charts.perDay'),
      average: 'day',
    },
  ]

  useEffect(() => {
    getMetrics().then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <HomePageWrapper>
      {charts.map((chart) => (
        <HomePageZone key={chart.title}>
          <Subtitle>{chart.title}</Subtitle>
          <Box>
            <Charts type={chart.type} options={data && prepareChart(chart.average, data)} />
          </Box>
        </HomePageZone>
      ))}
    </HomePageWrapper>
  )
}

HomePage.propTypes = {}

export default HomePage
