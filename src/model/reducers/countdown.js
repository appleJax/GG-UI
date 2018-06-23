import actionTypes from 'Constants/ActionTypes'
import { TWEET_INTERVAL, getTimeTilNextTweet } from 'Utils'

const { DECREMENT_COUNTDOWN, RESET_COUNTDOWN } = actionTypes

export default (state = getTimeTilNextTweet(), action) => {
  switch (action.type) {
    case DECREMENT_COUNTDOWN:
      const newState = state - 1
      return (newState < 0)
        ? TWEET_INTERVAL
        : newState

    case RESET_COUNTDOWN:
      return action.seconds

    default:
      return state
  }
}
