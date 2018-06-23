
import { ajax }    from 'Utils'
import syncActions from 'Actions/sync'

const {
  fetchingDeckTitles,
  setDeckTitles,
  errorFetchingDeckTitles
} = syncActions

export default ({
  fetchDeckTitles: () =>
    dispatch => {
      dispatch(fetchingDeckTitles())
      ajax.get('/decks')
        .then(deckTitles =>
          dispatch(setDeckTitles(deckTitles))
        ).catch(error =>
          dispatch(errorFetchingDeckTitles(error))
        )
    }
})
