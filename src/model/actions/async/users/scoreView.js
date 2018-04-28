import { getStats } from './common'
import payloadStates from 'Constants/PayloadStates'
import syncActions   from 'Actions/sync'
import { SCORES_PER_PAGE } from 'Utils'

const { LOGGED_IN, RESOLVED } = payloadStates
const { setScoreView } = syncActions

export default ({

  setScoreView: (view) => {
    if (view === 0) view = 'weeklyStats'
    if (view === 1) view = 'monthlyStats'
    if (view === 2) view = 'allTimeStats'

    return (dispatch, getState) => {
      dispatch(setScoreView(view))

      const { auth, search, users } = getState()
      let page = users[view].page || 1

      if (users[view].state !== RESOLVED && auth.state === LOGGED_IN) {
        const loggedInRank = auth.data[view].rank

        page = Math.ceil(
          loggedInRank / SCORES_PER_PAGE
        )
      }

      const params = {
        params: { page, search, view, pageSize: SCORES_PER_PAGE }
      }
      getStats(dispatch, params, view, search, users)
    }
  }

})
