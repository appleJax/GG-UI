import axios from 'axios'

export const ajax = axios.create({
  baseURL: 'http://localhost:3000/api',
  crossdomain: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export function tryCatch(promise) {
  return promise
    .then(data => data)
    .catch(err => {
      console.error(err)
      return []
    })
}
