import axios from 'axios'

const API = axios.create({
  baseURL: `https://dev-dl.tdcx.com:3092`,
  headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
})

export { API }
