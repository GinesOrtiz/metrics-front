import axios from '../../services/axios'

export const createMetric = (payload) => axios.post('/metrics', payload)
