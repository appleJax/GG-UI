import { combineReducers } from 'redux'
import stats               from './stats'
import cardView            from './cardView'
import correct             from './correct'
import incorrect           from './incorrect'
import unanswered          from './unanswered'

export default combineReducers({
  stats,
  cardView,
  correct,
  incorrect,
  unanswered
})
