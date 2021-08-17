import axios from '../../services/axios'
import i18n from '../../services/i18n'

export const getMetrics = () => axios.get('/metrics')

export const prepareChart = (type, data) => {
  const transformedData = data.reduce((a, b) => {
    const date = new Date(b.createdAt)
    const t = {
      minute: date.getMinutes(),
      hour: date.getHours(),
      day: date.getDate(),
    }[type]

    return {
      ...a,
      [t]: [...(a[t] ? a[t] : []), b.value],
    }
  }, {})

  return {
    xAxis: {
      type: 'category',
      data: Object.keys(transformedData),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: Object.values(transformedData).map((e) => (e.reduce((a, b) => a + b, 0) / e.length).toFixed(2)),
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      show: true,
      formatter: (point) => {
        return i18n.t(`homePage:tooltips.${type}`, { name: point.name, value: point.value })
      },
    },
  }
}
