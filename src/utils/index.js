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
  const minuteString = `${minutes}min`
  const hourString = (hours > 1)
    ? `${hours}hrs `
    : `${hours}hr `

  return `${hours ? hourString : ''}${minutes ? minuteString : ''}`
}

export function formatQuestionText(questionText) {
  return questionText.split('\n').slice(0, -1).map((line, i) => <p key={i}>{line}</p>)
}

export function formatAccuracy({ correct, attempts }) {
  if (Array.isArray(correct))
    correct = correct.length
  const percent = Math.floor(
    (correct / attempts) * 100
  )
  return `${percent}%`
}

export function debounce(fn, wait) {
  let timeout
  return function() {
    const args = arguments
    const context = this
    const exec = function() {
      timeout = null
      fn.apply(context, args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(exec, wait)
  }
}
