import { getScores } from './common'
import syncActions   from 'Actions/sync'
import { SCORES_PER_PAGE } from 'Utils'

const { setScoreView } = syncActions

export default ({

  setScoreView: (view) => {
    if (view === 0) view = 'weeklyStats'
    if (view === 1) view = 'monthlyStats'
    if (view === 2) view = 'allTimeStats'

    return (dispatch, getState) => {
      dispatch(setScoreView(view))
      const { search, users } = getState()
      const params = {
        params: { page: users[view].page, search, view, pageSize: SCORES_PER_PAGE }
      }
      getScores(dispatch, params, view, search, users)
    }
  }

})
