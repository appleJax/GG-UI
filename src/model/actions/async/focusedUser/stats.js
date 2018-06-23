import { ajax }      from 'Utils'
import syncActions   from 'Actions/sync'
import payloadStates from 'Constants/PayloadStates'

const { RESOLVED } = payloadStates
const {
  fetchingFocusedUser,
  setFocusedUser,
  notFoundFocusedUser,
  errorFetchingFocusedUser
} = syncActions

export default ({
  fetchFocusedUser: (handle) =>
    (dispatch, getState) => {
      const { focusedUser } = getState()
      if (
        focusedUser.stats.data === RESOLVED &&
        handle !== focusedUser.stats.data.handle
      ) { dispatch(fetchingFocusedUser()) }

      ajax.get(`/userStats/${handle}`)
        .then(user =>
          user
            ? dispatch(setFocusedUser(user))
            : dispatch(notFoundFocusedUser())
        ).catch(error =>
          dispatch(errorFetchingFocusedUser(error))
        )
    }
})
