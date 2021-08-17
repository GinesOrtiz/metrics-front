import axios from 'axios'

import { getItem, setItem } from './localStorage'

const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
})

client.interceptors.request.use((config) => {
  const user = getItem('user')

  config.headers.Authorization = user?.token

  return config
})

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const user = getItem('user')

    if (user?.token && error.response?.status === 401) {
      setItem('user', null)
      window.location.reload()
    }

    return Promise.reject(error)
  },
)

export default client
