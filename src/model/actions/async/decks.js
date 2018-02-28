import { ajax }    from 'Utils'
import syncActions from 'Actions/sync'

const {
  addDeck,
  fetchingDeck,
  notFoundDeck,
  errorFetchingDeck
} = syncActions

export default ({

  fetchDeck: (gameSlug) =>
    dispatch => {
      dispatch(fetchingDeck(gameSlug))
      ajax.get(`/deck/${gameSlug}`)
          .then(deck =>
            deck
              ? dispatch(addDeck(deck, gameSlug))
              : dispatch(notFoundDeck(gameSlug))
          ).catch(error =>
            dispatch(errorFetchingDeck(gameSlug, error))
          )
    }

})
