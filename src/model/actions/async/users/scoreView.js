import { getScores } from './common'
import syncActions   from 'Actions/sync'

const { setScoreView } = syncActions

export default ({

  setScoreView: (page = 1, view) => {
    if (view === 0) view = 'weeklyStats'
    if (view === 1) view = 'monthlyStats'
    if (view === 2) view = 'allTimeStats'

    return (dispatch, getState) => {
      dispatch(setScoreView(page, view))
      const { search, users } = getState()
      const params = {
        params: { search, view }
      }
      getScores(dispatch, params, view, search, users)
    }
  }

})
