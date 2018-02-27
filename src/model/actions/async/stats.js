import { getScores } from './common'

export default ({

  fetchStats: (view = 'weeklyStats', page = 1) =>
    (dispatch, getState) => {
        const { search, users, scoreView: view } = getState()
        const params = {
          params: { page, search, view }
        }
        getScores(dispatch, params, view, search, users)
    }

})
