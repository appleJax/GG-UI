import syncActions             from 'Actions/sync'
import {
  ajax,
  debounce,
  getTimeTilNextTweet
} from 'Utils'

const { resetCountdown } = syncActions

export default ({
  fetchCountdown: () =>
    dispatch => debouncedFetchCountdown(dispatch)
})

function _fetchCountdown(dispatch) {
  ajax.get('/countdown')
    .then(({ millis }) => {
      const seconds = Math.floor(millis / 1000)
      dispatch(resetCountdown(seconds || getTimeTilNextTweet()))
    }).catch(console.error)
}

const debouncedFetchCountdown = debounce(_fetchCountdown, 500)
