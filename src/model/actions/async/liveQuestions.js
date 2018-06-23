import { ajax, debounce } from 'Utils'
import payloadStates      from 'Constants/PayloadStates'
import syncActions        from 'Actions/sync'

const { INITIAL_STATE } = payloadStates
const {
  fetchingLiveQuestions,
  setLiveQuestions,
  notFoundLiveQuestions,
  errorFetchingLiveQuestions
} = syncActions

export default ({
  fetchLiveQuestions: () =>
    (dispatch, getState) =>
      debouncedFetchLiveQuestions(dispatch, getState)
})

function _fetchLiveQuestions(dispatch, getState) {
  const { liveQuestions } = getState()
  if (liveQuestions.state === INITIAL_STATE) {
    dispatch(fetchingLiveQuestions())
  }

  ajax.get('/live')
    .then(liveQuestions =>
      liveQuestions
        ? dispatch(setLiveQuestions(liveQuestions))
        : dispatch(notFoundLiveQuestions())
    ).catch(error =>
      dispatch(errorFetchingLiveQuestions(error))
    )
}

const debouncedFetchLiveQuestions = debounce(_fetchLiveQuestions, 500)
