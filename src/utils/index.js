import React from 'react'
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

export const HOURS = 3600000

export function calculateTimeRemaining(time) {
  const now = new Date().getTime()
  time = new Date(time).getTime()
  const millisRemaining  = (time + 24*HOURS) - now
  const hours = Math.floor(millisRemaining / HOURS)
  const minutes = Math.floor(
    (millisRemaining % HOURS) / 60000
  )
  const s = hours > 1 ? 's' : ''

  return `${hours}hr${s} ${minutes}min`
}

export function formatQuestionText(questionText) {
  return questionText.split('\n').slice(0, -1).map(line => <p>{line}</p>)
}
