import axios from 'axios'

export const ajax = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export function tryCatch(promise) {
  return promise
    .then(data => data)
    .catch(err => {
      console.error(err)
      return []
    })
}
