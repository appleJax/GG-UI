import axios from 'axios'

export const ajax = axios.create({
  baseURL: process.env.API_URL
})

export function tryCatch(promise) {
  return promise
    .then(data => data)
    .catch(err => {
      console.error(err)
      return []
    })
}
