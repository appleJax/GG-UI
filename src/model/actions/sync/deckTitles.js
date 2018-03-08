import actionTypes from 'Constants/ActionTypes'

const {
  FETCHING_DECK_TITLES,
  SET_DECK_TITLES,
  ERROR_FETCHING_DECK_TITLES
} = actionTypes


export default ({

  fetchingDeckTitles: () => ({
    type: FETCHING_DECK_TITLES
  }),

  setDeckTitles: (titles) => ({
    type: SET_DECK_TITLES,
    titles
  }),

  errorFetchingDeckTitles: (message) => ({
    type: ERROR_FETCHING_DECK_TITLES,
    message
  })

})
