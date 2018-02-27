
import { ajax }    from 'Utils'
import syncActions from 'Actions/sync'

const {
  fetchingGameTitles,
  setGameTitles,
  errorFetchingGameTitles
} = syncActions

export default ({

  fetchGameTitles: () =>
    dispatch => {
      dispatch(fetchingGameTitles())
      ajax.get('/decks')
          .then(gameTitles =>
            dispatch(setGameTitles(gameTitles))
          ).catch(error =>
            dispatch(errorFetchingGameTitles(error))
          )
    }

})
