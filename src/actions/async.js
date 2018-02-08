import { ajax } from 'Utils'
import {
  setFocusedUser,
  populateLiveQuestions,
  populateScoreboard
} from 'Actions/sync'


export const fetchLiveQuestions = () =>
  dispatch =>
    ajax.get('/live')
        .then(liveQuestions =>
          dispatch(populateLiveQuestions(liveQuestions))
        )
        .catch(console.error)

export const fetchScoreboard = (board) =>
  dispatch =>
    ajax.get('/scores')
        .then(users =>
          dispatch(populateScoreboard(users))
        )
        .catch(console.error)

export const fetchFocusedUser = (user) =>
  dispatch => {
    const earnedCards = user.allTimeStats.correct.map(obj => obj.cardId)
    const params = {
      params: {
        ids: earnedCards
      }
    }
    return ajax.get(`/cards`, params)
        .then(cards => {
          const userWithCards = {
            ...user,
            earnedCards: cards
          }
          dispatch(setFocusedUser(userWithCards))
        })
        .catch(console.error)
  }
