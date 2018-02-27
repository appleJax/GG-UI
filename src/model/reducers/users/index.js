import { combineReducers } from 'redux'
import weeklyStats  from './weeklyStats'
import monthlyStats from './monthlyStats'
import allTimeStats from './allTimeStats'

export default combineReducers({
  weeklyStats,
  monthlyStats,
  allTimeStats
})
