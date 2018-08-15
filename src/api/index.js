import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async saveData (data) {
    return api.put('data.json', data)
  },
  async loadData () {
    return api.get('data.json')
  }
}
