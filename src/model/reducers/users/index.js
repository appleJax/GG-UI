import { combineReducers } from 'redux'
import allTimeStats from './allTimeStats'
import monthlyStats from './monthlyStats'
import weeklyStats  from './weeklyStats'

export default combineReducers({
  allTimeStats,
  monthlyStats,
  weeklyStats
})
