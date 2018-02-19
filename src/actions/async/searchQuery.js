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
  const { search, scoreView: view } = getState()
  const params = {
    params: { search, view }
  }
  getScores(dispatch, params, view)
}

const debouncedFetchQuery = debounce(fetchQueryNaive, 250)
