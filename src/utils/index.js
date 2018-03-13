import React from 'react'
import axios from 'axios'

const { API_URL, TWITTER_ACCOUNT } = process.env

const axiosObject = axios.create({
  baseURL: API_URL
})

export const HOURS = 3600000

export const TWEET_INTERVAL = 6*HOURS / 1000

export const ajax = {
  get(url, config) {
    return axiosObject.get(url, config).then(({data}) => data)
  },
  post(url, config) {
    return axiosObject.post(url, config).then(({data}) => data)
  }
}

export function calculateTimeRemaining(time) {
  const now = new Date().getTime()
  const millisRemaining  = (time + 24*HOURS) - now
  const hours = Math.floor(millisRemaining / HOURS)
  const minutes = Math.floor(
    (millisRemaining % HOURS) / 60000
  )
  const minuteString = `${minutes}min`
  const hourString = (hours > 1)
    ? `${hours}hrs `
    : `${hours}hr `

  if (!hours && !minutes)
    return '< 1min'

  return `${hours ? hourString : ''}${minutes ? minuteString : ''}`
}

export function cardStatus({ cardId }, { correct, incorrect }) {
  if (incorrect.includes(cardId)) return 'incorrect'
  if (correct.includes(cardId))   return 'correct'
}

export function debounce(fn, wait) {
  let timeout
  return function(...args) {
    const exec = () => fn.apply(this, args)
    clearTimeout(timeout)
    timeout = setTimeout(exec, wait)
  }
}

export const formatGameTitle = (title) =>
  title.replace(/\s(ENG|JP)$/, '')

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

export const formatQuestionText = (questionText) =>
  questionText
    .split('\n')
    .slice(0, -2)
    .map((line, i) =>
      <p style={{margin: '0'}} key={i} >{line}</p>
    )

export function formatRatio({ correct, attempts, totalPossible }, total) {
  if (Array.isArray(correct))
    correct = correct.length

  const denominator = total
    ? totalPossible
    : attempts

  const percent = (denominator > 0)
    ? Math.floor(
        (correct / denominator) * 100
      )
    : 0

  return `${correct}/${denominator} - ${percent}%`
}

export function getCardIds(focusedUser, view) {
  const cards = focusedUser.stats.data.allTimeStats[view] || []
  return (typeof cards[0] === 'string')
    ? cards
    : cards.map(card => card.cardId)
}

export function getTimeTilNextTweet() {
  const startTimes = [ 2, 8, 14, 20 ].map(getTimeUntil)
  const millisUntilTweet = Math.min(...startTimes)
  return Math.floor(millisUntilTweet / 1000)
}

export const noWrap = (answers) => {
  const answerArray = answers.split(',')
  if (answerArray.length < 2)
    return answers

  return answerArray.map((answer, i, origArr) =>
    <span
      style={{ whiteSpace: 'nowrap'}}
      key={i}
    >{
      (i+1 === origArr.length)
        ?    answer
        : `${answer},`
    }</span>
  )
}

export function tryCatch(promise) {
  return promise
    .then(data => data)
    .catch(err => {
      console.error(err)
      return []
    })
}

export const questionLink = (tweetId) =>
  'https://twitter.com/' +
  `${TWITTER_ACCOUNT}/status/${tweetId}` +
  '?ref_src=twcamp%5Eshare%7Ctwsrc%5Em5%7Ctwgr%5Eemail%7Ctwcon%5E7046%7Ctwterm%5E1'

export const tweetLink = (cardId) =>
  'https://twitter.com' +
  `/search?q=from%3A${TWITTER_ACCOUNT}%20QID${cardId}` +
  '&ref_src=twcamp%5Eshare%7Ctwsrc%5Em5%7Ctwgr%5Eemail%7Ctwcon%5E7046%7Ctwterm%5E1'

export const userHasAnswered = ({ userId }) => (liveQuestion) =>
  liveQuestion.alreadyAnswered
    ? liveQuestion.alreadyAnswered.find(id => id === userId)
    : false


// private functions

function getTimeUntil(hour) {
  // UTC offset: +6 ... DST +5
  const offset = 5

  const now = new Date()
  hour = (hour + offset) % 24
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
