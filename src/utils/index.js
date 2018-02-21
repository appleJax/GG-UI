import React from 'react'
import axios from 'axios'

const { API_URL, TWITTER_ACCOUNT } = process.env

const axiosObject = axios.create({
  baseURL: API_URL
})

export const HOURS = 3600000

export const TWEET_INTERVAL = 6*HOURS

export const ajax = {
  get(url, config) {
    return axiosObject.get(url, config).then(({data}) => data)
  }
}

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

export function formatAccuracy({ correct, attempts }) {
  if (Array.isArray(correct))
    correct = correct.length
  const percent = Math.floor(
    (correct / attempts) * 100
  )
  return `${percent}%`
}

export function formatHMS(totalSeconds) {
  const hours = pad(
    Math.floor(totalSeconds / 3600)
  )
  const minutes = pad(
    Math.floor((totalSeconds % 3600) / 60)
  )
  const seconds = pad(
    Math.floor(totalSeconds - (hours*3600 + minutes*60))
  )

  return `${hours}:${minutes}:${seconds}`
}

export function formatQuestionText(questionText) {
  return questionText.split('\n').slice(0, -1).map((line, i) => <p key={i}>{line}</p>)
}

export function getTimeTilNextTweet() {
  const startTimes = [ 2, 8, 14, 20 ].map(getTimeUntil)
  const millisUntilTweet = Math.min(...startTimes)
  return millisUntilTweet / 1000
}

export function tryCatch(promise) {
  return promise
    .then(data => data)
    .catch(err => {
      console.error(err)
      return []
    })
}

export const tweetLink = (tweetId) =>
  `https://twitter.com/${TWITTER_ACCOUNT}/status/${tweetId}?ref_src=twcamp%5Eshare%7Ctwsrc%5Em5%7Ctwgr%5Eemail%7Ctwcon%5E7046%7Ctwterm%5E1`


// private functions

function getTimeUntil(hour) {
  hour = (hour + 6) % 24
  const now = new Date()
  const utcNow = now.getTime()
  let millisUntilTime = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    hour, 0, 0, 0) - utcNow

  if (millisUntilTime < 0) // already passed for today, wait until tomorrow
    millisUntilTime += 24*HOURS

  return millisUntilTime
}

function pad(num) {
  return num > 9
    ? String(num)
    : `0${num}`
}
