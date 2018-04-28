import { debounce }  from 'Utils'
import { getStats } from './common'
import syncActions   from 'Actions/sync'

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
  getStats(dispatch, params, view, search, users)
}

const delayExecution = true
const debouncedFetchQuery = debounce(fetchQueryNaive, 250, delayExecution)
