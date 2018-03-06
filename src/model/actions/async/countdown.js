import { ajax }    from 'Utils'
import syncActions from 'Actions/sync'
import { getTimeTilNextTweet } from 'Utils'

const { resetCountdown } = syncActions

export default ({

  fetchCountdown: () =>
    dispatch => {
      ajax.get('/countdown')
          .then(({ millis }) => {
            const seconds = Math.floor(millis / 1000)
            dispatch(resetCountdown(seconds || getTimeTilNextTweet()))
          }).catch(console.error)
    }

})
