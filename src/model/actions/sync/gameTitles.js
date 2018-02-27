import actionTypes from 'Constants/ActionTypes'

const {
  FETCHING_GAME_TITLES,
  SET_GAME_TITLES,
  ERROR_FETCHING_GAME_TITLES
} = actionTypes


export default ({

  fetchingGameTitles: () => ({
    type: FETCHING_GAME_TITLES
  }),

  setGameTitles: (titles) => ({
    type: SET_GAME_TITLES,
    titles
  }),

  errorFetchingGameTitles: (message) => ({
    type: ERROR_FETCHING_GAME_TITLES,
    message
  })

})
