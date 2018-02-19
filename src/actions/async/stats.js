import { getScores } from './common'

export default ({

  fetchStats: (view = 'weeklyStats', page = 1) =>
    (dispatch, getState) => {
        const { search } = getState()
        const params = {
          params: { page, search, view }
        }
        getScores(dispatch, params, view)
    }

})
