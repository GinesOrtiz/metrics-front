import axios from '../../services/axios'

export const doLogin = (data) => axios.post('/user/login', data)
export const doCreate = (data) => axios.post('/user/create', data)
