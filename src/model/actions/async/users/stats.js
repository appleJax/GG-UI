import { getScores } from './common'
import { SCORES_PER_PAGE } from 'Utils'

export default ({

  fetchStats: (page = 1, view) =>
    (dispatch, getState) => {
        const { scoreView, search, users } = getState()
        if (!view) view = scoreView
        const params = {
          params: { page, search, view, pageSize: SCORES_PER_PAGE }
        }
        getScores(dispatch, params, view, search, users)
    }

})
