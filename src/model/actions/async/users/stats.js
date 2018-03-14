import { getScores } from './common'

export default ({

  fetchStats: (page = 1, view) =>
    (dispatch, getState) => {
        const { scoreView, search, users } = getState()
        if (!view) view = scoreView.view
        const params = {
          params: { page, search, view }
        }
        getScores(dispatch, params, view, search, users)
    }

})
