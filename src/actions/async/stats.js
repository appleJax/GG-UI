import { getScores } from './common'

export default ({

  fetchStats: (view = 'weeklyStats', page = 1) =>
    (dispatch, getState) => {
        const { search } = getState()
        const params = {
          params: { page, view, search }
        }
        getScores(dispatch, params, view)
    }

})
