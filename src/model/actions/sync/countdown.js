import actionTypes from 'Constants/ActionTypes'

const {
  DECREMENT_COUNTDOWN,
  RESET_COUNTDOWN,
} = actionTypes

export default ({
  decrementCountdown: () => ({
    type: DECREMENT_COUNTDOWN
  }),

  resetCountdown: (seconds) => ({
    type: RESET_COUNTDOWN,
    seconds
  })
})
