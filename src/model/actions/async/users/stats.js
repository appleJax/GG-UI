import payloadStates from 'Constants/PayloadStates'
import { getStats } from './common'
import { SCORES_PER_PAGE } from 'Utils'

const { LOGGED_IN, RESOLVED } = payloadStates

export default ({
  fetchStats: (page = 1, view) =>
    (dispatch, getState) => {
      const { auth, scoreView, search, users } = getState()

      if (!view) view = scoreView

      let loggedInUser = ''
      if (users[view].state !== RESOLVED && auth.state === LOGGED_IN) {
        const loggedInRank = auth.data[view].rank
        if (loggedInRank) {
          loggedInUser = auth.data.userId
          page = Math.ceil(
            loggedInRank / SCORES_PER_PAGE
          )
        }
      }

      const params = {
        params: {
          loggedInUser,
          page,
          search,
          view,
          pageSize: SCORES_PER_PAGE
        }
      }
      getStats(dispatch, params, view, search, users)
    }
})
