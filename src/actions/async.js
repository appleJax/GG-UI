import { ajax } from 'Utils'
import {
  populateScore,
  populateScoreboard
} from 'Actions/sync'


export const fetchScoreboard = (board) =>
  dispatch =>
    ajax.get('/scores')
        .then(({ data: users }) =>
          dispatch(populateScoreboard(users))
        )
        .catch(console.error)


export const fetchScore = (handle) =>
  dispatch =>
    ajax.get(`/score/${handle}`)
        .then(({ data: user }) =>
          dispatch(populateScore(user))
        )
        .catch(console.error)
