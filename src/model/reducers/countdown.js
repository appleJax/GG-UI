import actionTypes from 'Constants/ActionTypes'
import { TWEET_INTERVAL, getTimeTilNextTweet } from 'Utils'

const { DECREMENT_COUNTDOWN, RESET_COUNTDOWN } = actionTypes

const timeToNextQuestion = getTimeTilNextTweet()

export default (state = timeToNextQuestion, action) => {
    switch (action.type) {
      case DECREMENT_COUNTDOWN:
        return state - 1

      case RESET_COUNTDOWN:
        return TWEET_INTERVAL

      default:
        return state
    }
  }
