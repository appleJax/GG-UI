import { debounce } from 'Utils'
import { getScores } from './common'
import syncActions from 'Actions/sync'

const { setSearchQuery } = syncActions

export default ({

  fetchQuery: (search) =>
    (dispatch, getState) => {
      dispatch(setSearchQuery(search))
      debouncedFetchQuery(dispatch, getState)
    }

})

// private functions

function fetchQueryNaive(dispatch, getState) {
  const { search, users, scoreView: view } = getState()
  const params = {
    params: { search, view }
  }
  getScores(dispatch, params, view, search, users)
}

const debouncedFetchQuery = debounce(fetchQueryNaive, 250)
