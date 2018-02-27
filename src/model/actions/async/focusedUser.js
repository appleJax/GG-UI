import { ajax }    from 'Utils'
import syncActions from 'Actions/sync'

const {
  fetchingEarnedCards,
  setEarnedCards,
  errorFetchingEarnedCards,

  fetchingFocusedUser,
  setFocusedUser,
  notFoundFocusedUser,
  errorFetchingFocusedUser
} = syncActions


export default ({

  fetchFocusedUser: (handle) =>
    dispatch => {
      dispatch(fetchingFocusedUser())
      const params = {
        params: { handle }
      }
      ajax.get('/userStats', params)
          .then(user =>
            dispatch(setFocusedUser(user))
          ).catch(error =>
            dispatch(errorFetchingFocusedUser())
          )
    },


  fetchEarnedCards: (ids) =>
    dispatch => {
      dispatch(fetchingEarnedCards())
      const params = {
        params: { ids }
      }
      ajax.get('/cards/earned', params)
          .then(cards =>
            dispatch(setEarnedCards(cards))
          ).catch(error =>
            dispatch(errorFetchingEarnedCards(error))
          )
    }

})
