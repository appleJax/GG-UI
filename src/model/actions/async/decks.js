import { ajax }    from 'Utils'
import syncActions from 'Actions/sync'

const {
  addDeck,
  fetchingDeck,
  notFoundDeck,
  errorFetchingDeck
} = syncActions

export default ({

  fetchDeck: (game) =>
    dispatch => {
      dispatch(fetchingDeck(game))
      ajax.get(`/decks/${game}`)
          .then(deck =>
            deck
              ? dispatch(addDeck(deck, game))
              : dispatch(notFoundDeck(game))
          ).catch(error =>
            dispatch(errorFetchingDeck(game, error))
          )
    }

})
