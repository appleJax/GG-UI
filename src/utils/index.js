import axios from 'axios'

const axiosObject = axios.create({
  baseURL: process.env.API_URL
})

export const ajax = {
  get(url, config) {
    return axiosObject.get(url, config).then(({data}) => data)
  }
}

export function tryCatch(promise) {
  return promise
    .then(data => data)
    .catch(err => {
      console.error(err)
      return []
    })
}
