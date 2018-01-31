import { ajax } from 'Utils'
import { populateScoreboard } from 'Actions/sync'

export const fetchScoreboard = (board) =>
  dispatch => {
    ajax.get('/scores')
      .then(users => dispatch(populateScoreboard(users)))
      .catch(console.error)
  }
